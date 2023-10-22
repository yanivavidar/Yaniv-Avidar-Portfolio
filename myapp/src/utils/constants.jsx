import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaPython,
  FaGit,
  FaCode, // Import a generic code icon
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiMongodb,
  SiServerless,
  SiMui,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "MongoDB", icon: <SiMongodb /> }, // Consider a more specific icon if available
      { name: "ServerSQL", icon: <SiServerless /> }, // Use the ServerSQL icon
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Python", icon: <FaPython /> }, // Use the Python icon
      { name: "Git", icon: <FaGit /> }, // Add Git skill with the Git icon
      { name: "C#", icon: <FaCode /> }, // Represent C# with a generic code icon
    ],
  },
];
