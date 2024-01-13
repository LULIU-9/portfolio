import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "🌳The wild oasis",
    img: "/the-wild-oasis.png",
    desc: "The Wild Oasis is a hotel management system that efficiently handles cabins, bookings, and various settings. ",
    demo: "https://the-wild-oasis-plum-five.vercel.app/",
    github: "https://github.com/LULIU-9/the-wild-oasis",
  },
  {
    id: 2,
    title: "🍕Fast Pizza Co.",
    img: "/fast-pizza.png",
    desc: "Fast Pizza is an online pizza ordering platform with features like menu retrieval, cart management, order placement, delivery tracking, and order customization, including priority settings.",
    demo: "https://fast-pizza-psi.vercel.app/",
    github: "https://github.com/LULIU-9/fast-pizza",
  },
  {
    id: 3,
    title: "📖Tao Talk",
    img: "/taotalk.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    demo: "https://taotalk.vercel.app/",
    github: "https://github.com/taodemy/taotalk",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a href={item.github}>
              <button>
                View Code <FaGithubAlt />
              </button>
            </a>
            <a href={item.demo}>
              <button>
                See Demo <FaExternalLinkAlt />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      {/* <div className="progress">
        <h1>Featured Works</h1> */}
      {/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
      {/* </div> */}

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
