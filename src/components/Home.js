import React from 'react'
import skhome from '../assets/images/SK/SK1.jpg'
import gallery from  '../gallery';

const Home = () => {
  return (
    <div id="home">
      <div>
          <img className="skhome" src={skhome} alt="sk" />
      </div>
      <h1>Sunga & Karis</h1>
      <p>Hey Friends & Family
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
        With love,
        <br />
        Sunga and Karis
      </p>
    </div>
  );
};

export default Home
