import "./hero.scss";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/LuLiu_CV.pdf";

    link.download = "LuLiu_CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <span>
              <motion.div
                animate={{ rotate: [0, 30, 0] }} // 角度动画
                transition={{ duration: 1, repeat: Infinity }} // 动画配置
                style={{ fontSize: "1rem", marginRight: "0.2rem" }} // 调整字体大小
              >
                👋
              </motion.div>
              Hi, I&apos;m
            </span>
            Lu Liu
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Front End and Full Stack developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <motion.button variants={textVariants} onClick={handleDownload}>
              Download My CV <LuDownload />
            </motion.button>
          </motion.div>
          <a href="#About">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>

      {/* <motion.div
        className="imageContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <video autoPlay muted>
          <source src="/EmojiMovie.MOV" type="video/mp4"></source>
        </video>
      </motion.div> */}
    </div>
  );
};

export default Hero;
