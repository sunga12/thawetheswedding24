import React, { useState } from 'react';
import { motion } from "framer-motion";
import menu from '../assets/images/Icon - Menu.png'
import close from '../assets/images/close.png'
import { Link } from 'react-scroll';

const navVariants ={
  hidden: {
    y: "-100",
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
}
const Navigation = () => {
  const [open, setOpen] = useState(false);

    return (
    <nav>
      {!open && (<div className="nav-section">
        <img src={menu} className="menu" alt="menu icon" onClick={() => setOpen(!open)} />
        <h3>S&K</h3>
      </div>)}
      {open && (<div>
        <img src={close} className="close" alt="close" onClick={() => setOpen(!open)} />
        <ul>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="home" smooth duration={500}>Home</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="bigday" smooth duration={500}>The Big Day</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="gifts" smooth duration={500}>Gifts</Link></motion.li>
          <motion.li variants={navVariants} initial="hidden" animate="visible"><Link to="contact" smooth duration={500}>RSVP</Link></motion.li>
        </ul>
      </div>)}
    </nav>
    )
};

export default Navigation;
