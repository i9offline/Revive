import React from 'react';

export default function FloatingBottle({ imageSrc }) {
  return (
    <div className="relative w-80 h-auto md:w-96 lg:w-[450px]">
      <img
        src={imageSrc}
        alt="Revive Bottle"
        className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        style={{
          filter: 'drop-shadow(0 30px 60px rgba(200, 227, 33, 0.2))'
        }}
      />
    </div>
  );
}
