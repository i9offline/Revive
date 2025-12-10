import React from 'react';
import React from 'react';


export default function FloatingBottle({ imageSrc }) {
  return (
    <div className="relative w-72 h-auto md:w-[400px]">
      <img
        src={imageSrc}
        alt="Revive Bottle"
        className="w-full h-auto drop-shadow-2xl"
      />
    </div>
  );
}
