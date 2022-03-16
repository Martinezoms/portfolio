import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const fetchAbouts = async () => {
    const query = '*[_type == "abouts"]';
    const data = await client.fetch(query);
    setAbouts(data);
  };

  useEffect(() => {
    fetchAbouts();
  }, []);

  return (
    <section>
      <h2 className="head-text" style={{ margin: 30 }}>
        I am looking for <span>opportunities</span> where I can make impacts with my tech acquired skills and also,
        <span> rooms for improvements and advancements.</span>
      </h2>
      <div className="app__about-keys">
        <div>
          <h1>Creative</h1>
        </div>
        <div>
          <h1>Innovative</h1>
        </div>
        <div>
          <h1>Team player</h1>
        </div>
        <div>
          <h1>Adaptive</h1>
        </div>
        <div>
          <h1>Fast learner</h1>
        </div>
      </div>
      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            key={about.title + i}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt="profile" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
