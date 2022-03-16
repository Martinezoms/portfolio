import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const Header = () => {
  return (
    <section className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello!, I am</p>
              <h1 className="head-text">Martins</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Frontend focused</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile__bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="pulse"
        />
      </motion.div>
      <motion.div variants={scaleVarients} whileInView={scaleVarients.whileInView} className="app__header-circles">
        {[images.html, images.javascript, images.react, images.css].map((circle, i) => (
          <div key={`circle-${i}`} className="circle-cmp app__flex">
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home");
