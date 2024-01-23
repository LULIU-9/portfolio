import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/LuLiu_CV.pdf";

    link.download = "LuLiu_CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className="navbar">
      <Sidebar />
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <span>
            <FaCode size={18} />
          </span>
          LU.
        </div>
        <div className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social">
          <a href="https://github.com/LULIU-9">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lu-liu-232983199">
            <FaLinkedin size={20} />
          </a>
          <a href="#contact">
            <button onClick={handleDownload}>
              My resumé <LuDownload />
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
