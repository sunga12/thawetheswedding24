import React from 'react';
import { motion } from 'framer-motion';
import skbigday from '../assets/images/SK/SKflnd1.jpg';

const dayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
      duration: 1.5,
    },
  },
};

const BigDay = () => (
  <div id="bigday">
    <motion.h1 variants={dayVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>The Big Day</motion.h1>
    <div className="bigday-deets">
      <motion.p variants={dayVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        We can&apos;t wait to celebrate with everyone!
        Below are the details for our Marriage Ceremony & Reception!
        Come ready to dance and celebrate God&apos;s goodness!
        <br />
        <h4>Marriage Blessing:</h4>
        First Love Church Ndola, Opposite Zesco Training Centre & Uno Filling Station.
        <br />
        <h4>Time:</h4>
        <span className="bold-text">10:00</span>
        <br />
        <h4>Reception:</h4>
        Izu Hotel, Ground Floor Hall
        <br />
        <h4>Time:</h4>
        <span className="bold-text">17:00</span>
      </motion.p>
      <div>
        <img className="skbigday" src={skbigday} alt="sk" />
      </div>
    </div>
    <h2>S & K</h2>
  </div>
);

export default BigDay;
