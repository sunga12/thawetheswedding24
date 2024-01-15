import React from 'react'
import skhome from '../assets/images/SK/SK1.jpg'
import { Link } from 'react-scroll';

const Home = () => {
  return (
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
        On Saturday 6th April 2024, we will be getting married surrounded by our family, friends and loved ones.
        <br />
        <br />
        We want to thank you all for your love and support. We are so excited to share this special day with our favorite people!
        <br />
        <br />

        <Link to="gifts" smooth duration={500}>
          <button>
            Give a Gift
          </button>
        </Link>
        <Link to="bigday" smooth duration={500}>
          <button>
            Our Wedding Day
          </button>
        </Link>
        <br />
        With love,
        <br />
        Sunga and Karis
      </p>
    </div>
  );
};

export default Home
