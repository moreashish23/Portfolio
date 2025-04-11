import {
    FaReact,
    FaHtml5,
    FaCss3,
    // FaNodejs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaGithub
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {BiLogoJavascript} from "react-icons/bi";
import {SiExpress, SiMongodb, SiMysql, SiWebpack} from "react-icons/si"
import {
    VscVscode,
    // VscCommetUnresloved,
    VscTerminalPowershell
} from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";

import {FaGitAlt, FaXTwitter, FaDribbble} from "react-icons/fa6";
// import {HdGroups3} from "react-icons/md";
import { MdGroups } from "react-icons/md";


import PROJECT_IMG_1 from "../assets/images/project-1.png"
import PROJECT_IMG_2 from "../assets/images/project-2.png"
import PROJECT_IMG_3 from "../assets/images/project-3.png"
import PROJECT_IMG_4 from "../assets/images/project-4.png"
import PROJECT_IMG_5 from "../assets/images/project-5.png"
import PROJECT_IMG_6 from "../assets/images/project-6.png"

export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero"},
    {id: "02", label: "Skills", offset: -100, to: "skills"},
    {id: "03", label: "About Me", offset: -100, to: "about"},
    {id: "04", label: "Projects", offset: -100, to: "projects"},
    {id: "05", label: "Contact", offset: -100, to: "contact"}
];

export const STATS = [
    {id: "01", count: "1", label: 'Internship in \nCore Java'},
    {id: "02", count: "2", label: 'Certification \nEarned'},
    {id: "03", count: "3", label: 'Projects  \nCompleted'}
];

export const SKILL_TABS = [
    {id:"01", label:"All", value: "all"},
    {id:"02", label:"Frontend", value: "frontend"},
    {id:"03", label:"Backend", value: "backend"},
    {id:"04", label:"Tools", value: "tools"},
    {id:"05", label:"Skills", value: "soft-skills"},
];

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React Js",
        progress: 95,
        type: "frontend",
        description:
            "Experienced in building scalable, component-driven web applications using React Js."
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "Html5",
        progress: 99,
        type: "frontend",
        description:
            "Expert in structuring web content with sematic HTML, ensuring accessibility and SEO optimization."
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS",
        progress: 90,
        type: "frontend",
        description:
            "Proficient in designing visually appealing and responsive layouts using css and pre-processors like "
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 80,
        type: "frontend",
        description:
            "Skilled in writting clean, modular, and efficient JavaScript code to create interactive web function "
    },
    {
        id: "05",
        icon: DiNodejs,
        skill: "NodeJS",
        progress: 95,
        type: "backend",
        description:
            "Skilled building scalable and high-performance server-side applications using Node js."
    },
    {
        id: "06",
        icon: SiExpress,
        skill: "Express Js",
        progress: 95,
        type: "backend",
        description:
            "Proficient in developing RESTful ApIs and middleware using Express js."
    },
    {
        id: "07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 75,
        type: "backend",
        description:
            "Experienced in designing and managing NoSQL database using MongoDB."
    },
    {
        id: "08",
        icon: SiMysql,
        skill: "Mysql",
        progress: 85,
        type: "backend",
        description:
            "Proficient in working with relational database using SQL."
    },
    {
        id: "09",
        icon: FaGitAlt,
        skill: "Git",
        progress: 95,
        type: "tools",
        description:
            "Proficient in using Git for version control, managing branches, commits, and collaborative workflows."
    },
    {
        id: "10",
        icon: FaGithub,
        skill: "GitHub",
        progress: 90,
        type: "tools",
        description:
            "Experienced in using GitHub for code collaboration, pull requests, issue tracking, and project management."
    }
    
];

export const ABOUT_ME = {
    contect: `I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications.
My journey in web development started with a simple curiosity, which quickly grew into a deep interest in crafting interactive and visually appealing user interfaces. I specialize in working with technologies like HTML, CSS, JavaScript, and React, and have hands-on experience building dynamic websites, admin panels, and chatbot-based features
I’ve worked on various real-world projects such as e-commerce platforms, profile management systems, and mobile store websites, focusing on performance, responsiveness, and clean UI/UX.
In addition to frontend development, I’m also building my skills in backend technologies. I’ve completed Node.js and Express.js, and I'm currently focused on MongoDB to develop full-stack applications using the MERN stack.
I also actively participate in hackathons, where I was recently selected among the top 100 out of 700+ participants in a frontend development challenge. These experiences have helped me sharpen my problem-solving skills and work efficiently under tight deadlines.
I'm always eager to learn, grow, and take on new challenges to build impactful web solutions.`,
    socialLinks: [
        {id: "01", label: "Facebook", icon: FaFacebook, link:"#"},
        {id: "02", label: "Instagram", icon: FaInstagram, link:"https://www.instagram.com/ashish_more_23/"},
        // {id: "03", label: "Twitter", icon: FaXTwitter, link:"#"},
        {id: "04", label: "Linkedin", icon: FaLinkedin, link:"https://www.linkedin.com/in/ashish-more-0651932a6/"},
        // {id: "05", label: "Dribble", icon: FaDribbble, link:"#"}
    ],

    email: "moreashishshivaji23@gmail.com",
    phone: "9529956217",
    website:"www.ashishmore.com"
};

export const PROJECTS = [
    {
        id: 1,
        title: "Lays",
        image: PROJECT_IMG_1,
        tags: ["HTML", "CSS", "JavaScript"],
        gitLink: "https://github.com/OpAditya1109/BugBusters-ReimagineRound1"
      },      
    {
        id: 2,
        title: "Profile Management System",
        image: PROJECT_IMG_2,
        tags: ["ReactJS", "Firebase", "React-Router-Dom"],
        gitLink: "https://github.com/moreashish23/ProfileCard"
    },
    {
        id: 3,
        title: "Mobile E-Commerce Website",
        image: PROJECT_IMG_3,
        tags: ["ReactJS", "React-Router-Dom"],
        gitLink: "https://github.com/moreashish23/Mobile-Website-Frontend"
    }
]
