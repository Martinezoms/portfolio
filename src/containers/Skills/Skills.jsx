import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const query = '*[_type == "skills"]';

    const data = await client.fetch(query);
    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section className="app__skills">
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="app__skills-item app__flex"
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt="" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
