import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import "./portfolio.scss";

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
    title: "🎵Taotify(In progress)",
    img: "/taotify.png",
    desc: "Music player application in development",
    demo: "https://app.taotify.com/",
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
          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  return (
    <div className="portfolio" ref={ref} id="projects">
      <h1>Featured Works</h1>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
