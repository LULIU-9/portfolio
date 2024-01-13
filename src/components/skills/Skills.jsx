import "./skills.scss";
import { motion } from "framer-motion";
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGitAlt, FaSass } from "react-icons/fa6";
import {
  SiJavascript,
  SiMysql,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "ES6", icon: <SiJavascript /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "MySql", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Styled Component", icon: <SiStyledcomponents /> },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="wrapper">
        <motion.h1 variants={variants} initial="initial" whileInView="animate">
          Skills
        </motion.h1>

        <ul>
          {skills.map((skill, index) => (
            <motion.li
              key={skill.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
