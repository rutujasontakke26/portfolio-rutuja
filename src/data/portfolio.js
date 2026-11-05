export const portfolio = {
  name: "Rutuja Sontakke",
  firstName: "Rutuja",
  fullName: "Rutuja Sontakke",
  location: "Ahilyanagar, Maharashtra, India",
  email: "sontakkerutuja55@gmail.com",
  phone: "8261933955",
  resume: `${import.meta.env.BASE_URL}rutuja-sontakke-resume.pdf`,
  socialLinks: {
    github: "https://github.com/rutujasontakke26",
    linkedin: "https://www.linkedin.com/in/rutuja-sontakke/",
  },
  roles: ["BCA Student", "Web Developer", "Python Learner", "AI/ML Enthusiast"],
  introduction:
    "I’m a third-year BCA student from Ahilyanagar, building a thoughtful path into the IT industry—one practical project and one new idea at a time.",
  about:
    "I enjoy turning ideas into approachable web experiences and learning how technology can solve everyday problems. My resume reflects hands-on work with HTML, CSS and JavaScript, alongside C/C++ and data structures. I’m currently learning ReactJS, and I’m curious about Python, Java and AI/ML. My next step is a paid internship where I can contribute, keep learning and grow into a dependable IT professional.",
  opportunity: "Open to paid internship opportunities",
  stats: [
    { value: "03", label: "web projects in my resume" },
    { value: "08", label: "skills listed on my resume" },
    { value: "01", label: "spreadsheet case study in my files" },
  ],
  skills: [
    {
      title: "Languages",
      note: "Named in my resume",
      items: ["C / C++", "JavaScript"],
      tone: "lavender",
    },
    {
      title: "Web development",
      note: "ReactJS is currently in progress",
      items: ["HTML", "CSS", "JavaScript", "ReactJS · learning"],
      tone: "peach",
    },
    {
      title: "AI/ML & data",
      note: "Interest area; no libraries listed yet",
      items: ["AI / ML · exploring"],
      tone: "mint",
    },
    {
      title: "Core CS",
      note: "Named in my resume",
      items: ["Data Structures & Algorithms"],
      tone: "sky",
    },
    {
      title: "Testing & tools",
      note: "Tools named in my resume",
      items: ["Git", "GitHub"],
      tone: "peach",
    },
    {
      title: "Exploring next",
      note: "Interests shared for this portfolio",
      items: ["Python", "Java"],
      tone: "lavender",
    },
  ],
  projects: [
    {
      id: "trackmyfit",
      name: "TrackMyFit",
      type: "Fitness website",
      category: "web",
      description:
        "A responsive fitness website with interactive UI components and client-side functionality, built as a collaborative web project.",
      tags: ["HTML", "CSS", "JavaScript", "GitHub"],
      github:
        "https://github.com/rutujasontakke26/icp-13-html-css-javascript-github-group-project-3-trackmyfit",
      visual: "fitness",
      visualLabel: "Illustrative preview of the TrackMyFit fitness website",
      featured: true,
    },
    {
      id: "zaika-express",
      name: "Zaika Express",
      type: "Restaurant website",
      category: "web",
      description:
        "A responsive food-delivery website focused on user-friendly navigation and interactive elements.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rutujasontakke26/zaika-express",
      visual: "restaurant",
      visualLabel: "Illustrative preview of the Zaika Express restaurant website",
    },
    {
      id: "to-do-app",
      name: "To-Do Application",
      type: "Task management",
      category: "web",
      description:
        "A task management app using DOM manipulation to add, manage and delete tasks.",
      tags: ["HTML", "CSS", "JavaScript", "DOM"],
      github: "https://github.com/rutujasontakke26/to-do-app",
      visual: "todo",
      visualLabel: "Illustrative preview of a task list for the To-Do Application",
    },
    {
      id: "social-media-impact",
      name: "Social media impact on life",
      type: "Spreadsheet case study",
      category: "other",
      description:
        "A workbook in the supplied files contains a structured social-media dataset, COUNTIF/COUNTIFS questions and a gender-distribution chart. Project authorship and analysis scope are not specified in the workbook.",
      tags: ["Spreadsheet", "COUNTIF", "COUNTIFS", "Chart"],
      visual: "chart",
      visualLabel: "Gender distribution chart embedded in the supplied workbook",
    },
  ],
  education: {
    qualification: "Bachelor of Computer Applications",
    shortName: "BCA",
    stage: "Third-year student",
    institution: "[Add college or university]",
    dates: "[Add study dates or expected graduation]",
    location: "Ahilyanagar, Maharashtra, India",
  },
  contactNote:
    "This form opens your email app with the message filled in. You can connect a form service later if you’d prefer messages to send directly from the site.",
};
