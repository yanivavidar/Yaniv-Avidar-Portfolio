import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a
        href="https://www.linkedin.com/in/yaniv-avidar-1315b5291/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Yaniv Avidar's LinkedIn"
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yanivavidar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Yaniv Avidar's GitHub"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
