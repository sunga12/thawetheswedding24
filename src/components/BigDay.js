import React from 'react'
import { motion } from 'framer-motion';

const dayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
      duration: 1.5,
    },
  },
};

const BigDay = () => {
  return (
    <div id="bigday">
      <motion.h1 variants={dayVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>The Big Day</motion.h1>
      <motion.p variants={dayVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        We can't wait to celebrate with everyone! Below are the details for our Marriage ceremony & reception! Come ready to dance and celebrate God's goodness!
        <br />
        <br />
        <h4>Marriage Blessing:</h4>
        First Love Church Ndola, Opposite Zesco Training Centre & Uno Filling Station.
        <br />
        <h4>Time:</h4>
        <span className="bold-text">10:00</span>
        <br />
        <br />
        <h4>Reception:</h4>
        Izu Hotel, Ground Floor Hall
        <br />
        <h4>Time:</h4>
        <span className="bold-text">17:00</span>
        <h2>S & K</h2>
        
      </motion.p>
    </div>
  )
}

export default BigDay
