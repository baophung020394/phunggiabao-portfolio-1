import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  viralprofit,
  seven11,
  webpack,
  docker,
  threejs,
  postgresql,
  mysql,
  jest,
} from "../assets/icons";
import {
  apollo,
  hpicture,
  onemount,
  smartosc,
  waveasean,
  rikkei,
} from "../assets/images";

export const skills = [
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Backend",
  },
  {
    imageUrl: postgresql,
    name: "Postgresql",
    type: "Backend",
  },
  {
    imageUrl: webpack,
    name: "Webpack",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Threejs",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "PHP Developer",
    company_name: "Apollo English",
    icon: apollo,
    iconBg: "#accbe1",
    date: "Oct 2015 - June 2017",
    points: [
      "Development and maintenance of company system Sugar CRM",
      "Professional training to use the system for sales, admins, teachers",
      "Technology used: PHP, Sugar CRM",
      "Team size: 1 CTO, 2 PHP, 1 Database Engineer",
    ],
  },
  {
    title: "Fresher - Junior Frontend",
    company_name: "SmartOSC",
    icon: smartosc,
    iconBg: "#e1e1e1",
    date: "Jul 2017 - Sep 2019",
    points: [
      "Development and maintenance project for clients",
      "Slice HTML from XD and Zeplin files. Responsible for the website's responsive.",
      "Technology used: CMS Sitecore, HTML, CSS, JavaScript, Magento 2",
      "Team size: 20",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "One Mount Consumer",
    icon: onemount,
    iconBg: "#e1e1e1",
    date: "Oct 2019 - Mar 2021",
    points: [
      "Develop a Q&A game application using the React.js library and integrate it into the VinID e-wallet",
      "Coordinate with the QC team to fix UI bugs on mobile devices.",
      "Technology used: Reactjs, Nodejs, Firebase",
      "Team size: 14 members",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "WAVE Asean",
    icon: waveasean,
    iconBg: "#e1e1e1",
    date: "Mar 2021 - Mar 2023",
    points: [
      "Build projects from scratch using React.js and successfully deliver 2 projects for employee and user information management for the Moa Group Chat system, including channel, group, and 1:1 chat functionalities.",
      "Maintain and develop additional small tasks for the Java Spring Boot 3 project. Successfully deliver the video call feature for the IRROM project from Korea.",
      "Participated in discussions, development, and successful delivery of the Angular 9 project for weekly breakfast and lunch orders for company staff at Korea.",
      "Involved in fixing UI bugs for web and mobile, and developing additional features for the company's big data security project.",
      "Discuss and ideate with designers about UX/UI to make appropriate adjustments for the projects.",
      "Establish the Scrum model for the team, manage and assign tasks, and provide training for team members.",
      "Responsible for training members and delivering projects.",
      "Technology used: Reactjs, Nodejs, JAVA Spring Boot 3, MySQL, Socket",
      "Team size: 4 members",
    ],
  },
  {
    title: "Senior Software Fullstack",
    company_name: "Rikkeisoft",
    icon: rikkei,
    iconBg: "#a60008",
    date: "Mar 2023 - Current",
    points: [
      "Develop features to enhance the Offline Engine system by applying discount codes for 7-11 stores when the store loses internet connectivity. Once internet is restored, the discount codes are updated on the cloud based on the Node.js/MongoDB/IoT - MQTT/S3 source code in Hawaii, USA.",
      "Participate in and fix issues for the Master Data Management System project using React.js with the Indian team of 7-11 USA.",
      "Research and implement New Relic technology for monitoring the Offline Engine project.",
      "Responsible for running test cases, reporting, merging code, and fixing conflicts on the client's GitLab.",
      "Technology used: Reactjs, Nodejs, Mongodb, AWS, New Relic, MQTT, S3",
      "Team size: 8 members Viet Nam, over 14 members Indian",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/baophung020394",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/phunggiabao",
  },
];

export const projects = [
  {
    iconUrl: viralprofit,
    theme: "btn-back-red",
    name: "Viral profit",
    description: [
      "Develop systems for quizzes, checkout processes, viewing online course videos, and booking calendars, working with the Slack API.",
      "Position: Project Leader.",
      "Team size: 7 members",
      "Tech stacks: React.js, Node.js, PostgreSQL, Vercel, Render.com.",
    ],
    link: "https://www.viralprofits.yt/home",
  },
  {
    iconUrl: seven11,
    theme: "btn-back-green",
    name: "Offline Engine",
    description: [
      "Learn New Relic for monitoring the Node.js application, create alerts to send emails on the Raspberry Pi 5 device for the Offline Engine project.",
      "Code the feature to update and synchronize the latest data from the cloud to In-Store when the cloud service is down for over an hour in Nodejs using expressjs for the Offline Engine project.",
      "Create and run test cases to support the QC team for the Offline Engine project",
      "Position: Backend Developer.",
      "Team size: 8 members.",
      "Tech stacks: React.js, Node.js, MongoDB, AWS, New Relic, MQTT, S3.",
    ],
    link: "none",
  },
  {
    iconUrl: seven11,
    theme: "btn-back-green",
    name: "Master Data Management System",
    description: [
      "Join project Reactjs to fix bugs and develop additional features based on UX/UI from Figma for the Master Data Management System project.",
      "Be responsible for daily reports, daily meetings, checking issues, and getting requirements from the Indian team for the Master Data Management System project.",
      "Support creating merge requests and resolving code conflicts for the Vietnam team between the company's GitLab and the client's 7-11 GitLab.",
      "Position: Frontend Developer.",
      "Team size: 14 members.",
      "Tech stacks: React.js",
    ],
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "Moa Group",
    description: [
      "Project MOA Group, managing company information, employees, users, chat channels information, chat groups, 1:1 chats, and company payment information.",
      "Position: Fullstack developer.",
      "Team size: 5 members.",
      "Tech stacks: React.js, Java Sprint Boot 3, Nodejs, MySQL, Web socket",
    ],
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "IRROM",
    description: [
      "Development of video calling feature in investor and presenter meeting.",
      "Position: Fullstack developer.",
      "Team size: 5 members.",
      "Tech stacks: React.js, Java Sprint Boot 3, Nodejs, MySQL, Web socket",
    ],
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "Open chatting",
    description: [
      "Develop web chat for travel sharing community in channels, groups and friends. Integrate into the project of restaurant booking, massage via chatbot.",
      "Position: Fullstack developer.",
      "Team size: 5 members.",
      "Tech stacks: React.js, Java Sprint Boot 3, Nodejs, MySQL, Web socket",
    ],
    link: "none",
  },
  {
    iconUrl: onemount,
    theme: "btn-back-yellow",
    name: "Q & A",
    description: [
      "Develop a Q&A game application using the React.js library and integrate it into the VinID e-wallet. Coordinate with the QC team to fix UI bugs on mobile devices.",
      "Position: Senior Software Engineer.",
      "Team size: 18 members.",
      "Tech stacks: React.js",
    ],

    link: "none",
  },
  {
    iconUrl: hpicture,
    theme: "btn-back-yellow",
    name: "Hanh Tinh (GLOBALTECH)",
    description: [
      "Develop a project for booking breakfast and lunch for the company's internal staff. Develop a Big Data project, collaborating with the QC team to fix UI errors.",
      "Position:  Junior Frontend.",
      "Team size: 4 members.",
      "Tech stacks: Angular 9",
    ],
    link: "none",
  },
];
