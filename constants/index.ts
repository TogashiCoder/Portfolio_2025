import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "cpp",
    image: "cpp.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "csharp.svg",
    width: 80,
    height: 80,
  },
 
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  // {
  //   skill_name: "HTML",
  //   image: "html.png",
  //   width: 100,
  //   height: 100,
  // },
  // {
  //   skill_name: "CSS",
  //   image: "css.png",
  //   width: 100,
  //   height: 100,
  // },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  // },
  // {
  //   skill_name: "TypeScript",
  //   image: "ts.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "angular.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  }, 
  {
    skill_name: "Bootstrap",
    image: "bootstrap.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Blade Templates",
    image: "laravelBlade.svg",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Laravel",
    image: "LaravelPng.png",
    width: 280,
    height: 280,
  },
  {
    skill_name: "Spring Boot",
    image: "springbootPng.png",
    width: 190,
    height: 190,
  },
 
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Laravel + Blade",
    image: "laravel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot + Angular",
    image: "spring.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP + React",
    image: "php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js + React",
    image: "node.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "API Development",
    image: "api.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Sonarqube",
    image: "sonarqubeIcon.svg",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Figma",
    image: "figma.svg",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Spring Boot & Angular :🛒Multi Vendor eCommerce Platform – Anon.com",
    
    image: "/projectsCover/anon.webp",
    link: "https://www.linkedin.com/posts/boucettataoufik_wholesale-marketplace-project-using-spring-activity-7254110285685219328-XODj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBEFDcBuoOgJXyfjGCnUD3xo7ksqyo-oxs",
    // link: "https://www.youtube.com/watch?v=ZOs15jRarxc",
  },

  {
    title: "Laravel 12: Multi-Vendor Digital Marketplace (2025) -ZipinClick.com",

    image: "/projectsCover/zipInclick.webp",
    link: "https://github.com/TogashiCoder/ZipinClick.com-",
  },

  {
    title: "Spring Boot & Angular : Microservice-ConstructionXS",
   
    image: "/projectsCover/construction.jpg",
    link: "https://github.com/TogashiCoder/Microservice-ConstructionXS-",
  },


  {
    title: "Spring Boot & Angular :IT support App - IT Resource Management System",
   
    image: "/projectsCover/it.webp",
    link: "https://github.com/TogashiCoder/IT_Support_Full-Stack_Application",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/TogashiCoder",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/boucettataoufik/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:taoufik.b.pro@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;