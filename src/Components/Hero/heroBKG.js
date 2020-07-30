import React from 'react';
import Hero from './Hero';
import './heroBKG.css';

const heroBKG = () => {
  return (
    <div className='hero'>
      <div className='cube'></div>
      <div className='cube'></div>
      <div className='cube'></div>
      <div className='cube'></div>
      <div className='cube'></div>
      <div className='cube'></div>
      <Hero />
    </div>
  );
};

export default heroBKG;
