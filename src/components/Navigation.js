import React, { useState } from 'react'
import menu from '../assets/images/Icon - Menu.png'
import close from '../assets/images/close.png'
import { Link } from 'react-scroll';

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
          <li><Link to="home" smooth duration={500}>Home</Link></li>
          <li><Link to="bigday" smooth duration={500}>The Big Day</Link></li>
          <li><Link to="gifts" smooth duration={500}>Gifts</Link></li>
        </ul>
      </div>)}
    </nav>
    )
};

export default Navigation;
