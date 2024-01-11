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
import { animate, motion, useScroll, useTransform } from "framer-motion";
import "./aboutMe.scss";
import { useRef } from "react";

const skills = [
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <TbBrandNextjs size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "ES6", icon: <SiJavascript size={50} /> },
  { name: "Sass", icon: <FaSass size={50} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={50} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={50} /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} /> },
  { name: "Styled Component", icon: <SiStyledcomponents size={50} /> },
  { name: "MySql", icon: <SiMysql size={50} /> },
  { name: "Git", icon: <FaGitAlt size={50} /> },
  { name: "HTML5", icon: <FaHtml5 size={50} /> },
  { name: "AWS", icon: <FaAws size={50} /> },
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

const AboutMe = () => {
  return (
    <div className="about">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h1>About Me</h1>
        <p>
          Hi there! I&apos;m <b>Lu Liu</b>, a passionate web developer with a
          strong foundation in front-end technologies. I specialize in turning
          ideas into interactive and user-friendly websites.
        </p>
        <br />
        <p>
          Holding a degree in <b>Bachelor of Computer Science</b> from the
          University of Queensland, my primary focus is on front-end
          development, particularly using technologies like <span>React</span>.
          I also have experience with back-end technologies such as{" "}
          <span>Node.js</span>, adding versatility to my skill set.
        </p>

        <br />
        <p>
          Get to know more my{" "}
          <a href="https://www.linkedin.com/in/lu-liu-232983199">Linkedin</a>
        </p>
      </motion.div>
      <div className="skillsContainer">
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
              //   viewport={{
              //     once: true,
              //   }}
              custom={index}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="stars"></div>
    </div>
  );
};

export default AboutMe;
