import React from 'react';
import { motion } from 'framer-motion';
import airtel from '../assets/images/airtelmomo.png';
import mtn from '../assets/images/momozmw.png';
import fnb from '../assets/images/fnb.png';
import remitly from '../assets/images/remitly.png';
import world from '../assets/images/world.png';
import taptap from '../assets/images/taptap.png';
import paypal from '../assets/images/paypal.png';

const giftVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
      duration: 2,
    },
  },
};

const Gifts = () => {
  return (
    <div id="gifts">
      <motion.h1 variants={giftVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-top">Gifts</motion.h1>
      <motion.p variants={giftVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} >
        Dear Friends and Family,
        <br />
        <br />
        If you would like to contribute to our special day,
        we have created a honeymoon fund instead of accepting traditional 
        gifts.
        <br />
        <br />
        Your generosity will help us create unforgettable memories 
        and start our lives together on an incredible adventure.
        <br />
        <br />
        Ways to give:
        <br />
        <br />

    <div className="gift-deets">
      <motion.div variants={giftVariants} initial="hidden" whileInView="visible" className="logos">
            <div className="pay-deets">
              <img src={airtel} className="momo" alt="airtel money logo" />
              <p>
              <span className="network">Airtel Money:</span>
                <br />
                <br />
                Name: Sungabanja Thawethe
                <br />
                Number: +260975147761
              </p>
            </div>
            <div className="pay-deets">
            <img src={mtn} className="momo" alt="mtn money logo" />
            <p>
            <span className="network">MTN Money:</span>
                <br />
                <br />
                Name: Sungabanja Thawethe
                <br />
                Number: +260964311916
              </p>
            </div>
            <div className="pay-deets">
            <img src={fnb} className="momo" alt="mtn money logo" />
            <p>
            <span className="network">First National Bank:</span>
                <br />
                <br />
                Name: Sungabanja Thawethe
                <br />
                Account: 627918104579
              </p>
            </div>
      </motion.div>
      <div className="int-deets">
        <p className="int-msg">
        International Transfers can be made to any 
        of the above numbers through any of the 
        following Platforms:
        </p>

        <div className="pay-methods">
          <a href="https://www.remitly.com/us/en/landing/fbslp?g_acctid=246-442-0064&g_campaign=GBR-Global_Acquisition_Core_Brand&g_campaignid=771204655&g_adgroupid=40173954843&g_adid=485819711454&g_keyword=remitly&g_keywordid=aud-325067424685%3Akwd-60364513998&g_network=g&utm_source=google&utm_medium=Direct&utm_term=GBR-Global_Global_Acquisition_Direct_Brand_Brand&utm_content=undefined&utm_campaign=GBR-Global_Acquisition_Core_Brand&kpid=485819711454&gad_source=1&gclid=CjwKCAiA7t6sBhAiEiwAsaieYjsyC6MafLQs6QRySGJ1WQ5-XDQ8wnKs4FzAIx-srhn2-EqbRlDrKhoCMnEQAvD_BwE"
          target="_blank" rel="noreferrer" className="pay-deets">
            <img src={remitly} className="paym" alt="mtn money logo" />
          </a>
          <a href="https://www.worldremit.com/en/zambia?amountfrom=100.00&selectfrom=gb&currencyfrom=gbp&selectto=zm&currencyto=zmw&transfer=csh"
          rel="noreferrer" target="_blank" className="pay-deets">
            <img src={world} className="paym" alt="mtn money logo" />
          </a>
          <a href="https://www.taptapsend.com/" rel="noreferrer" target="_blank" className="pay-deets">
            <img src={taptap} className="paym" alt="mtn money logo" />
          </a>
          <a href="https://www.paypal.com/us/digital-wallet/send-receive-money/send-money"
          rel="noreferrer" target="_blank" className="pay-deets">
            <img src={paypal} className="paym" alt="mtn money logo" />
          </a>
        </div>
      </div>
    </div>

        <br />
        <br />
        Thank you for being a part of our special day. We can't wait
        to see you and share in the celebration!
        <br />
        <br />

        With love,
        <br />
        Sunga & Karis</motion.p>
    </div>
  )
}

export default Gifts
