import { motion } from "framer-motion";
import "./about.scss";

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
          Get to know more from my{" "}
          <a href="https://www.linkedin.com/in/lu-liu-232983199">Linkedin</a>
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
