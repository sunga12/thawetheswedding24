import React from 'react';
import { motion } from 'framer-motion';

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

const Contact = () => (
  <div id="contact">
    <h1 className="title">Contact Us</h1>
    <h4 className="contact-comment">To RSVP or to Find out more Details, Send us a message!</h4>
    <form action="https://formspree.io/f/xrgnbdnq" method="POST">
      <ul className="form-list">
        <li>
          <input type="text" name="user-name" id="name" maxLength="100" required placeholder="Full name" />
        </li>
        <li>
          <textarea name="user-message" id="message" maxLength="500" required placeholder="Type Message Here..." />
        </li>
        <li className="contact-button">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="form-submit"
            type="submit"
          >
            Send Message
          </motion.button>
        </li>
        <span id="error" aria-live="polite" />
      </ul>
    </form>
  </div>
);

export default Contact;
