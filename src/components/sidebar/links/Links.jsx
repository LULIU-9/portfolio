import { motion } from "framer-motion";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { LuDownload, LuDownloadCloud } from "react-icons/lu";
import "./links.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.toLocaleLowerCase()}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <div className="social">
        <div className="wrap">
          <a href="https://github.com/LULIU-9">
            <FaGithubAlt size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lu-liu-232983199">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <a href="#contact">
          My resumé <LuDownloadCloud />
        </a>
      </div>
    </motion.div>
  );
};

export default Links;
