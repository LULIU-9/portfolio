import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
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
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social">
          <a href="https://github.com/LULIU-9">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lu-liu-232983199">
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
