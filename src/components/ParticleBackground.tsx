import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
  type: "dot" | "ring" | "star";
}

interface Orb {
  x: number;
  y: number;
  radius: number;
  hue: number;
  speed: number;
  angle: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  const createParticles = useCallback((width: number, height: number): Particle[] => {
    const count = Math.min(Math.floor((width * height) / 18000), 80);
    const types: Array<"dot" | "ring" | "star"> = ["dot", "ring", "star"];
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      hue: 220 + Math.random() * 40,
      life: Math.random() * 1000,
      maxLife: 800 + Math.random() * 400,
      type: types[Math.floor(Math.random() * types.length)],
    }));
  }, []);

  const createOrbs = useCallback((width: number, height: number): Orb[] => {
    return Array.from({ length: 5 }, (_, i) => ({
      x: width * (0.2 + Math.random() * 0.6),
      y: height * (0.2 + Math.random() * 0.6),
      radius: 120 + Math.random() * 200,
      hue: 220 + i * 25,
      speed: 0.0003 + Math.random() * 0.0005,
      angle: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.002 + Math.random() * 0.003,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let orbs: Orb[] = [];
    let meteors: Meteor[] = [];
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = createParticles(canvas.width, canvas.height);
      orbs = createOrbs(canvas.width, canvas.height);
    };

    const spawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.003) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: -10,
          length: 60 + Math.random() * 100,
          speed: 3 + Math.random() * 4,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 0.6 + Math.random() * 0.4,
          life: 1,
        });
      }
    };

    const drawStar = (cx: number, cy: number, size: number, opacity: number, hue: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = `hsla(${hue}, 70%, 70%, ${opacity})`;
      ctx.lineWidth = 0.5;
      const spikes = 4;
      for (let i = 0; i < spikes; i++) {
        const angle = (i * Math.PI) / (spikes / 2);
        ctx.beginPath();
        ctx.moveTo(cx - Math.cos(angle) * size, cy - Math.sin(angle) * size);
        ctx.lineTo(cx + Math.cos(angle) * size, cy + Math.sin(angle) * size);
        ctx.stroke();
      }
      ctx.restore();
    };

    const animate = (timestamp: number) => {
      const dt = Math.min(timestamp - lastTime, 32);
      lastTime = timestamp;
      timeRef.current += dt * 0.001;
      const time = timeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // === ANIMATED ORB GRADIENTS (background blobs) ===
      orbs.forEach((orb) => {
        orb.angle += orb.speed * dt;
        orb.pulsePhase += orb.pulseSpeed * dt;
        const pulse = Math.sin(orb.pulsePhase) * 0.3 + 0.7;
        const ox = orb.x + Math.cos(orb.angle) * 80;
        const oy = orb.y + Math.sin(orb.angle * 0.7) * 60 - scrollRef.current * 0.1;

        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.radius * pulse);
        gradient.addColorStop(0, `hsla(${orb.hue + Math.sin(time) * 10}, 60%, 50%, 0.04)`);
        gradient.addColorStop(0.5, `hsla(${orb.hue + 20}, 50%, 40%, 0.02)`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // === ANIMATED MESH / WAVE LINES ===
      ctx.save();
      ctx.globalAlpha = 0.03;
      ctx.strokeStyle = `hsla(230, 60%, 60%, 0.3)`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const baseY = canvas.height * 0.15 + i * (canvas.height * 0.1);
        for (let x = 0; x <= canvas.width; x += 4) {
          const wave = Math.sin(x * 0.005 + time * 0.8 + i * 0.5) * 30 +
                       Math.sin(x * 0.01 + time * 1.2 + i) * 15;
          const yPos = baseY + wave - scrollRef.current * 0.05 * (i + 1);
          if (x === 0) ctx.moveTo(x, yPos);
          else ctx.lineTo(x, yPos);
        }
        ctx.stroke();
      }
      ctx.restore();

      // === PARTICLES ===
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p, i) => {
        p.life += dt * 0.05;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }

        const lifeFade = p.life < 100 ? p.life / 100 :
                         p.life > p.maxLife - 100 ? (p.maxLife - p.life) / 100 : 1;

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Mouse interaction (gentle attraction + repulsion close up)
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 30) {
          const force = (200 - dist) / 200 * 0.015;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        } else if (dist <= 30) {
          const force = (30 - dist) / 30 * 0.05;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        // Gentle sine wave drift
        p.vx += Math.sin(time + i * 0.1) * 0.001;
        p.vy += Math.cos(time + i * 0.15) * 0.001;

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        const currentOpacity = p.opacity * lifeFade;

        // Draw based on type
        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${currentOpacity})`;
          ctx.fill();

          // Glow
          if (p.size > 1) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${currentOpacity * 0.1})`;
            ctx.fill();
          }
        } else if (p.type === "ring") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${p.hue}, 50%, 65%, ${currentOpacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === "star") {
          drawStar(p.x, p.y, p.size * 1.5, currentOpacity * 0.7, p.hue);
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 130) {
            const lineOpacity = 0.06 * (1 - cdist / 130) * lifeFade;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(230, 50%, 60%, ${lineOpacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }

        // Mouse connection lines
        if (dist < 180) {
          const lineOpacity = 0.08 * (1 - dist / 180);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `hsla(230, 70%, 65%, ${lineOpacity})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }
      });

      // === METEORS / SHOOTING STARS ===
      spawnMeteor();
      meteors = meteors.filter((m) => m.life > 0);
      meteors.forEach((m) => {
        m.x += Math.cos(m.angle) * m.speed * (dt * 0.06);
        m.y += Math.sin(m.angle) * m.speed * (dt * 0.06);
        m.life -= dt * 0.001;

        const gradient = ctx.createLinearGradient(
          m.x, m.y,
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        gradient.addColorStop(0, `rgba(180, 200, 255, ${m.opacity * m.life})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${m.opacity * m.life * 0.8})`;
        ctx.fill();
      });

      // === FLOATING GEOMETRIC SHAPES (very subtle) ===
      ctx.save();
      ctx.globalAlpha = 0.015;
      for (let i = 0; i < 3; i++) {
        const cx = canvas.width * (0.25 + i * 0.25) + Math.sin(time * 0.3 + i) * 40;
        const cy = canvas.height * 0.5 + Math.cos(time * 0.2 + i * 2) * 60 - scrollRef.current * 0.08;
        const size = 40 + i * 20;
        const rotation = time * 0.1 + i * Math.PI / 3;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation);
        ctx.strokeStyle = `hsla(${220 + i * 30}, 50%, 60%, 0.4)`;
        ctx.lineWidth = 0.5;

        if (i === 0) {
          // Triangle
          ctx.beginPath();
          for (let j = 0; j < 3; j++) {
            const a = (j * 2 * Math.PI) / 3 - Math.PI / 2;
            const px = Math.cos(a) * size;
            const py = Math.sin(a) * size;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        } else if (i === 1) {
          // Square
          ctx.strokeRect(-size / 2, -size / 2, size, size);
        } else {
          // Hexagon
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const a = (j * 2 * Math.PI) / 6;
            const px = Math.cos(a) * size;
            const py = Math.sin(a) * size;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    init();
    animationId = requestAnimationFrame(animate);

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [createParticles, createOrbs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
