import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import skhome from '../assets/images/SK/SK1.jpg';

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.4,
    },
  },
};

const Home = () => (
  <div id="home">
    <div className="img-div">
      <img className="skhome" src={skhome} alt="sk" />
    </div>
    <p className="home-msg">
      <h1 className="home-heading">Sunga & Karis</h1>
      Hey Friends & Family
      <br />
      <br />
      Welcome to our Wedding Website! Here you can find all the details for our Special day.
      <br />
      <br />
      On Saturday 6th April 2024, we will be getting married surrounded by our family,
      friends and loved ones.
      <br />
      <br />
      We want to thank you all for your love and support.
      We are so excited to share this special day with our favorite people!
      <br />
      <br />

      <Link to="gifts" smooth duration={500}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="form-submit"
          type="submit"
        >
          Give A Gift
        </motion.button>
      </Link>
      <Link to="bigday" smooth duration={500}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="form-submit"
          type="submit"
        >
          Our Wedding Day
        </motion.button>
      </Link>
      <br />
      With love,
      <br />
      Sunga and Karis
    </p>
  </div>
);

export default Home;
