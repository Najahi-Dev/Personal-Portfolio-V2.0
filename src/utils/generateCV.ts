import jsPDF from "jspdf";

export function downloadCV() {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const colors = {
    primary: [30, 58, 138] as [number, number, number],
    dark: [30, 30, 30] as [number, number, number],
    gray: [100, 100, 100] as [number, number, number],
    light: [150, 150, 150] as [number, number, number],
    accent: [59, 91, 219] as [number, number, number],
    line: [200, 210, 230] as [number, number, number],
  };

  // Helper functions
  const setFont = (size: number, style: "normal" | "bold" = "normal", color: [number, number, number] = colors.dark) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(...color);
  };

  const drawLine = (yPos: number) => {
    doc.setDrawColor(...colors.line);
    doc.setLineWidth(0.3);
    doc.line(margin, yPos, pageWidth - margin, yPos);
  };

  const addSection = (title: string) => {
    y += 6;
    if (y > 270) { doc.addPage(); y = 18; }
    setFont(11, "bold", colors.primary);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    drawLine(y);
    y += 5;
  };

  const wrapText = (text: string, maxWidth: number, fontSize: number): string[] => {
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(text, maxWidth);
  };

  const checkPageBreak = (neededSpace: number) => {
    if (y + neededSpace > 280) { doc.addPage(); y = 18; }
  };

  // ===== HEADER =====
  setFont(22, "bold", colors.primary);
  doc.text("ABOOTHAIYOOB AHMADH NAJAHI", margin, y);
  y += 8;

  setFont(9, "normal", colors.gray);
  doc.text("Email: ahmednajahi2003@gmail.com  |  Mobile: +94750538620", margin, y);
  y += 4.5;
  doc.text("LinkedIn: linkedin.com/profile  |  GitHub: github.com", margin, y);
  y += 4.5;
  doc.text("Address: 60/B Al-Manar Road, Maruthamunai-02, Kalmunai, Ampara, Sri Lanka", margin, y);
  y += 3;
  drawLine(y);
  y += 2;

  // ===== PROFILE =====
  addSection("Profile");
  setFont(9.5, "normal", colors.dark);
  const profileText = "Enthusiastic IT graduate with a solid foundation in software engineering and hands-on experience in web applications, databases, and system development. Strong analytical and problem-solving skills with a keen interest in learning new technologies and contributing to high-quality software solutions.";
  const profileLines = wrapText(profileText, contentWidth, 9.5);
  profileLines.forEach((line: string) => {
    checkPageBreak(5);
    doc.text(line, margin, y);
    y += 4.5;
  });

  // ===== EDUCATION =====
  addSection("Education");

  const educations = [
    {
      degree: "BSc (Hons) Computer Science in Software Engineering",
      school: "Kingston University, UK | Esoft Uni",
      location: "Kandy, Sri Lanka",
      period: "Present",
      details: ""
    },
    {
      degree: "Higher National Diploma in Computing - Software Engineering",
      school: "Pearson College, UK | Esoft Metro Campus",
      location: "Batticaloa, Sri Lanka",
      period: "Feb 2024 - Sep 2025",
      details: "Key Focus: Software Analysis and Design, UI/UX, Agile and Scrum, RDBMS, Web and Mobile Applications"
    },
    {
      degree: "Diploma in IT",
      school: "ESoft Metro Campus (SEG, UK Awards)",
      location: "Batticaloa, Sri Lanka",
      period: "Jun 2024 - Feb 2025",
      details: "Key Focus: Web Applications, Network Security, Python, SQL"
    },
    {
      degree: "Cyber Security Training Course",
      school: "Mars Tech",
      location: "Colombo, Sri Lanka",
      period: "Jan 2023 - Dec 2023",
      details: ""
    }
  ];

  educations.forEach((edu) => {
    checkPageBreak(18);
    setFont(10, "bold", colors.dark);
    doc.text(edu.degree, margin, y);
    setFont(8.5, "normal", colors.light);
    doc.text(edu.period, pageWidth - margin, y, { align: "right" });
    y += 4.5;
    setFont(9, "normal", colors.gray);
    doc.text(`${edu.school} — ${edu.location}`, margin, y);
    y += 4;
    if (edu.details) {
      setFont(8.5, "normal", colors.gray);
      const detailLines = wrapText(edu.details, contentWidth, 8.5);
      detailLines.forEach((line: string) => {
        doc.text(line, margin, y);
        y += 4;
      });
    }
    y += 2;
  });

  // ===== SKILLS =====
  addSection("Skills Summary");
  const skillsList = [
    { cat: "Languages:", val: "Python, SQL, JavaScript, HTML, CSS, PHP, C#, TailwindCSS, Bootstrap" },
    { cat: "Frameworks:", val: "Pandas, ReactJS, NumPy, .NET Framework, PyTest" },
    { cat: "Tools:", val: "Power BI, Excel, PowerPoint, MySQL, SPSS, SSMS, Git & Github, Figma" },
    { cat: "Platforms:", val: "Visual Studio Code, IntelliJ IDEA, WebStorm, Trea, Pycharm" },
    { cat: "Soft Skills:", val: "Rapport Building, Stakeholder Management, Communication, Time Management" },
    { cat: "Technical:", val: "Agile Development, UI/UX Design, Database Management, SDLC, Scrum" },
  ];

  skillsList.forEach((s) => {
    checkPageBreak(6);
    setFont(9, "bold", colors.dark);
    doc.text(s.cat, margin, y);
    const catWidth = doc.getTextWidth(s.cat) + 2;
    setFont(9, "normal", colors.gray);
    const valLines = wrapText(s.val, contentWidth - catWidth, 9);
    valLines.forEach((line: string, idx: number) => {
      doc.text(line, margin + catWidth, y + idx * 4.2);
    });
    y += valLines.length * 4.2 + 1.5;
  });

  // ===== PROJECTS =====
  addSection("Projects");
  const projects = [
    { name: "Component Flow Explorer", date: "Jun 2025 - Jul 2025", desc: "Developer tool built with TypeScript and React for interactive visualization, editing, and deployment of component flows. Features real-time visualization, live code editing, and integrated deployment workflows." },
    { name: "Weather Tracking System", date: "May 2025 - Jun 2025", desc: "React and TypeScript based weather tracking application using Weather API. Country-based weather tracking with dynamic UI themes based on weather conditions." },
    { name: "Telegram To-Do Bot", date: "May 2025 - Jun 2025", desc: "Python-based daily to-do tracking Telegram bot that manages daily activities and tasks through conversational commands." },
    { name: "Grifindo Leave Management System", date: "Apr 2024 - Dec 2024", desc: "Leave management system built with C# using OOP concepts. Manages employees' roster time and annual, casual, and short leaves." },
    { name: "Personal Portfolio", date: "Jan 2025 - Jun 2025", desc: "Responsive personal portfolio website showcasing skills, projects, and experiences with modern web technologies." },
    { name: "Material Dashboard React", date: "Jun 2025 - Jul 2025", desc: "ReactJS + Material UI based Dashboard application." },
    { name: "XCoders Website", date: "May 2025 - Jun 2025", desc: "ReactJS + Material UI + Vite based modern website." },
    { name: "Direct Message Delay", date: "Aug 2025 - Jun 2025", desc: "ReactJS + Material UI + TypeScript + Vite based messaging system." },
    { name: "Mood Mail Generator", date: "Aug 2025 - Jun 2025", desc: "Input-based mood mail generator built with ReactJS + Material UI + TypeScript." },
  ];

  projects.forEach((p) => {
    checkPageBreak(16);
    setFont(10, "bold", colors.dark);
    doc.text(p.name, margin, y);
    setFont(8.5, "normal", colors.light);
    doc.text(p.date, pageWidth - margin, y, { align: "right" });
    y += 4.5;
    setFont(8.5, "normal", colors.gray);
    const descLines = wrapText(p.desc, contentWidth, 8.5);
    descLines.forEach((line: string) => {
      checkPageBreak(5);
      doc.text(line, margin, y);
      y += 4;
    });
    y += 3;
  });

  // ===== CERTIFICATES =====
  addSection("Certificates");
  const certs = [
    { name: "Internet of Things", provider: "Cisco", date: "February 2023" },
    { name: "Ethical Hacking", provider: "Mars Tech", date: "March 2023" },
    { name: "Generative AI", provider: "Google", date: "December 2023" },
    { name: "Data Science", provider: "Cisco", date: "April 2023" },
  ];

  certs.forEach((c) => {
    checkPageBreak(6);
    setFont(9.5, "bold", colors.dark);
    doc.text(`${c.name} (${c.provider})`, margin, y);
    setFont(8.5, "normal", colors.light);
    doc.text(c.date, pageWidth - margin, y, { align: "right" });
    y += 5.5;
  });

  // ===== REFERENCE =====
  addSection("References");
  checkPageBreak(30);
  setFont(10, "bold", colors.dark);
  doc.text("NMM. Nuhman", margin, y);
  y += 4.5;
  setFont(8.5, "normal", colors.gray);
  doc.text("(MBA, BEng(Hons) in Software Engineering)", margin, y);
  y += 4;
  doc.text("Programme Manager / Assistant Lecturer – IT", margin, y);
  y += 4;
  doc.text("ESOFT Metro Campus Batticaloa, 43 Baily Road, Batticaloa, Sri Lanka", margin, y);
  y += 4;
  doc.text("Mobile: 0707157160 / 0760730103  |  Email: mohamed.nuhman@esoft.lk", margin, y);

  // Save the PDF
  doc.save("Ahmadh_Najahi_CV.pdf");
}
