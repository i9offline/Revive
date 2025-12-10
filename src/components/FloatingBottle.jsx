import React from 'react';
import bottleImage from '../assets/images/revive-bottle.png';


export default function FloatingBottle() {
  return (
    <div className="relative w-72 h-auto md:w-[400px]">
      <img
        src={bottleImage.src}
        alt="Revive Bottle"
        className="w-full h-auto drop-shadow-2xl"
      />
    </div>
  );
}
