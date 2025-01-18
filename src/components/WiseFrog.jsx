import React, { useState } from 'react';
import './WiseFrog.css';

const wisdomArray = [
  "Leap into new opportunities, and don't be afraid to make a splash in life!",
  "Sometimes the lily pad you're looking for has been under your webbed feet all along.",
  "Take life one hop at a time - rushing only leads to getting tongue-tied!",
  "Be patient, young tadpole. Every great journey starts with a single ribbit.",
  "Even on your worst days, remember you're toad-ally awesome!",
  "The pond of life is full of opportunities, just keep swimming!",
  "Wisdom comes to those who wait, so don't get jumpy about it.",
  "Life's flies may buzz away, but your inner peace should stay.",
  "Sometimes you have to kiss a few flies before finding your prince-iple in life.",
  "When life gets swampy, remember that every lily pad has its silver lining.",
  "Don't let anyone burst your bullfrog bubble - stay positive!",
  "The best pad is the one you make for yourself, so hop to it!",
  "True wisdom comes from the bottom of the pond up.",
  "Keep your head above water and your spirits high, little froggy.",
  "A wise frog knows that every puddle has potential.",
  "Croak your own song - don't just follow the chorus.",
  "The best flies come to those who wait patiently by the pond.",
  "Sometimes you need to take a leap without seeing the lily pad.",
  "A frog who follows others never finds their own path to the pond.",
  "When in doubt, ribbit it out!"
];

const WiseFrog = () => {
  const [showWisdom, setShowWisdom] = useState(false);
  const [wisdom, setWisdom] = useState('');

  const generateWisdom = () => {
    const randomIndex = Math.floor(Math.random() * wisdomArray.length);
    setWisdom(wisdomArray[randomIndex]);
    setShowWisdom(true);
  };

  return (
    <div className="frog-container">
      <div className="wisdom-bubble" style={{ opacity: showWisdom ? 1 : 0 }}>
        {wisdom}
      </div>
      <img 
        src={process.env.PUBLIC_URL + '/frog-wiz.jpg'} 
        alt="Wizard Frog" 
        className="frog-image"
      />
      <button onClick={generateWisdom} className="wisdom-button">
        Press for Wisdom
      </button>
    </div>
  );
};

export default WiseFrog; 