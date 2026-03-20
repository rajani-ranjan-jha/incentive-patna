import React from 'react';

const IncentiveIcon = ({ 
  size = 24, 
  color = "#E11D48", // Defaulting to the red in your image
  strokeWidth = 2,
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bulb Outline */}
      <path d="M15 17.5c2.5-1.5 4-4.5 4-7.5 0-5-3.1-8-7-8S5 5 5 10c0 3 1.5 6 4 7.5" />
      
      {/* The "i" Dot */}
      <circle cx="12" cy="7.5" r="0.5" fill={color} stroke="none" />
      
      {/* The "i" Stem */}
      <line x1="12" y1="10" x2="12" y2="14" />
      
      {/* Bulb Base (3 lines) */}
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="20" x2="14" y2="20" />
      <line x1="11" y1="22" x2="13" y2="22" />
    </svg>
  );
};

export default IncentiveIcon;