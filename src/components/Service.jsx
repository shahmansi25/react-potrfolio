import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>4+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
         
          <span>Full Stack Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
         
                  <span>Frontend Development</span>
                  <ul>
                      <li>HTML 5 / CSS3</li>
                      <li>SCSS</li>
                      <li>Angular</li>
                      <li>React</li>
                      <li>Backbone JS</li>
                  </ul>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
         
                  <span>Backend Development</span>
                  <ul>
                      <li>PHP</li>
                      <li>Laravel</li>
                      <li>MY SQL</li>
                  </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;