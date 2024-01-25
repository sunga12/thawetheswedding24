/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import menu from '../assets/images/Icon - Menu.png';
import close from '../assets/images/close.png';

const navVariants = {
  hidden: {
    y: '-100',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggeredChildren: 1,
    },
  },
};
const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {!open && (
      <div className="nav-section">
        <img
          src={menu}
          className="menu"
          alt="menu icon"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ')}
          tabIndex="0"
        />
        <h3>S&K</h3>
      </div>
      )}
      {open && (
      <div>
        <img
          src={close}
          className="close"
          alt="close"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ')}
          tabIndex="0"
        />
        <ul>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="home" smooth duration={500}>Home</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="bigday" smooth duration={500}>The Big Day</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="gifts" smooth duration={500}>Gifts</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="contact" smooth duration={500}>RSVP</Link></motion.li>
        </ul>
      </div>
      )}
    </nav>
  );
};

export default Navigation;
