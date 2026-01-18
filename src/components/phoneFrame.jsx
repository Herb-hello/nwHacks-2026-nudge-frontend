// src/components/PhoneFrame.jsx
import React from 'react';

const PhoneFrame = ({ children }) => {
  return (
    <div className="relative w-[430px] h-[932px]"> {/* iPhone 16 Plus dimensions */}
      {/* SVG Frame */}
      <img
        src="/iPhone 16 Plus.svg"
        alt="iPhone Frame"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      
      {/* Screen Content Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[394px] h-[852px] overflow-hidden rounded-[55px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;