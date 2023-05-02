import React from 'react';
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronBarDown} from 'react-icons/bs';
import result from '../asset/result.png';
import cv from '../asset/Mansi_Shah_Resume_Frontend.pdf';

const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
              },
              whileInView: {
                x: 0,
                opacity: 1,
              },
        },
        button: {
            initial: {
              y: "-100%",
              opacity: 0,
            },
            whileInView: {
              y: 0,
              opacity: 1,
            },
          }
    }
  return (
      <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Mansi
                </motion.h1>
                  <Typewriter
                    options={{
                    strings: ["Frontend Developer", "FullStack Developer"],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                      }} />
                    <div>
                  <a href={cv} download>Download CV</a>            
                        <a href = "#work">Projects <BsArrowUpRight/></a>
                  </div>
            </div>
        </section>
          <section>
              <img src={result} alt="mansi" />
          </section>
          <BsChevronBarDown />
      </div>
  )
}

export default Home