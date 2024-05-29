import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Spline from '@splinetool/react-spline';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="sm:flex block">
        <div className="flex-1 flex justify-center items-center"  style={{ backgroundImage: 'url(public/Overview.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} >
          <div className="mx-auto" >
            <Spline scene="https://prod.spline.design/zlrP1ba9FCzEVIxE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <motion.div variants={textVariant()} className='flex-1 flex flex-col justify-center items-start'>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
        </motion.div>
      </div>

      <div className='mt-5 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
