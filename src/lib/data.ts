// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";

// Define and export the type for a single project
export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
        id: 1,
        title: "Electron Download Manager",
        description: "A desktop application for downloading and managing files built with Electron, TypeScript, and Node.js. When you click the link, the file will download.",
        technologies: ["Electron", "TypeScript", "Supabase", "Tailwind CSS", "Prisma", "Vercel"],
        image: "/electronDownManager.jpg",
        github: "https://github.com/house-open/Electron-Download-Manager",
    },
    {
        id: 2,
        title: "Win Boat",
        description: "An Electron app which allows you to run Windows apps on Linux using a containerized approach.",
        technologies: ["Electron", "Node.js", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/winningBoat.jpg",
        github: "https://github.com/house-open/winningBoat",
    },
    // add 5 more to test carousel
    {
        id: 3,
        title: "Health Connect",
        description: "Health-Connect is a Semester 1 DBMS course project designed to manage core hospital operations such as appointments, doctor schedules, patient diagnoses, and medical histories. It showcases how relational database design and SQL-based data handling can improve the organization, accuracy, and efficiency of healthcare information management.",
        technologies: ["React.js", "Node.js", "Express", "MySQL"],
        image: "/healthConnect.jpg",
        github: "https://github.com/house-open/Health-Connect",
    },
    {
        id: 4,
        title: "Guardian Care",
        description: "Guardian Care is a comprehensive platform designed to facilitate meal services and user management. The project includes functionalities for meal requests, upcoming meals, user roles, memberships, transactions, reviews, and a dashboard for administrative purposes.",
        technologies: ["React.js", "Firebase", "Express", "MongoDB", "Tailwind CSS"],
        image: "/guardianCare.jpg",
        github: "https://github.com/house-open/Guardian-Care",
    },
    {
        id: 5,
        title: "GoogleOAuth: Full-Stack Google Auth Platform",
        description: "GoogleOAuth is a secure authentication system that enables users to log in with their Google accounts, providing reliable identity management for modern applications.",
        technologies: ["Next.js", "Tailwind CSS", "Prisma", "Vercel", "OAuth"],
        image: "/googleOAuth.png",
        github: "https://github.com/house-open/google-oauth",
    },
    {
        id: 6,
        title: "Chatbot",
        description: "Verinox GPT is an elite AI assistant that combines expert-level precision, educational clarity, and trusted advisory capabilities to support users worldwide.",
        technologies: ["React.js", "OpenAI", "TypeScript", "Vite", "Tailwind CSS"],
        image: "/chatbot.png",
        github: "https://github.com/house-open/chatbot",
    },

];

export const historyData = [
    {
      icon: Code,
      title: "Senior Software Engineer",
      company: "Equativ",
      date: "May, 2024 - Oct, 2025",
      description:
        "Mentored a team of 5 junior developers, fostering professional growth and improved adherence to best practices.",
    },
    {
      icon: Code,
      title: "Software Engineer",
      company: "Swile",
      date: "Nov, 2018 - May, 2024",
      description:
        "Architected scalable and high-performance payment and user-management APIs efficiently handling over 1 million daily users with 99.9% uptime.",
    },
    {
      icon: Code,
      title: "Software Engineer Intern",
      company: "The Exploration Company",
      date: "Mar, 2018 - Oct, 2018",
      description:
        "Developed and deployed interactive front-end modules using a comprehensive tech stack to deliver scalable, reliable, and efficient software solutions.",
    },
    {
      icon: GraduationCap,
      title: "Master’s and Bachelor’s in Information Technology",
      institution: "EPITA - École pour l'informatique et les techniques avancées",
      date: "2014 - 2019",
      description:
        "Graduated with a GPA of 16.2/20, focusing on information technology in Software Engineering",
    },
  ];

export const frontendTech = [
    "React",
    "Vue.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
];

export const backendTech = [
    "Next.js",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Django",
];

export const toolsAndDevops = ["AWS", "Azure", "GitHub", "GitLab", "Docker"];

export const programmingLanguages = ["JavaScript", "Java", "PHP", "Go", "Python"];

