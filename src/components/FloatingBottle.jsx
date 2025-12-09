import React from 'react';
import { getAssetPath } from '../utils/url.js';


export default function FloatingBottle() {
  return (
    <div className="relative w-72 h-auto md:w-[400px]">
      <img
        src={getAssetPath("images/revive-bottle.png")}
        alt="Revive Bottle"
        className="w-full h-auto drop-shadow-2xl"
      />
    </div>
  );
}
