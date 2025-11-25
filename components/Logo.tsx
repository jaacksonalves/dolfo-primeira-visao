import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'color' }) => {
  const blue = '#2563EB';
  const red = '#EF4444';
  const white = '#FFFFFF';
  
  const textColor = variant === 'white' ? white : blue;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 70" 
      className={className} 
      fill="none"
      aria-label="Dolfo"
    >
      <title>Dolfo</title>
      <g fill={textColor}>
        {/* Letter d */}
        <path d="M35 60 C 24 60, 15 51, 15 40 C 15 29, 24 20, 35 20 C 42 20, 48 24, 51 30 L 51 10 L 60 10 L 60 60 L 51 60 L 51 50 C 48 56, 42 60, 35 60 Z M 38 52 C 45 52, 51 46, 51 40 C 51 34, 45 28, 38 28 C 31 28, 25 34, 25 40 C 25 46, 31 52, 38 52 Z" />
        
        {/* Letter o */}
        <path d="M90 60 C 79 60, 70 51, 70 40 C 70 29, 79 20, 90 20 C 101 20, 110 29, 110 40 C 110 51, 101 60, 90 60 Z M 90 52 C 97 52, 102 46, 102 40 C 102 34, 97 28, 90 28 C 83 28, 78 34, 78 40 C 78 46, 83 52, 90 52 Z" />
        
        {/* Letter l */}
        <path d="M125 10 L 134 10 L 134 60 L 125 60 Z" />
        
        {/* Letter f */}
        <path d="M155 60 L 146 60 L 146 28 L 142 28 L 142 20 L 146 20 L 146 15 C 146 5, 152 0, 162 0 L 168 0 L 168 8 L 162 8 C 157 8, 155 10, 155 15 L 155 20 L 168 20 L 168 28 L 155 28 L 155 60 Z" />
        
        {/* Letter o */}
        <path d="M200 60 C 189 60, 180 51, 180 40 C 180 29, 189 20, 200 20 C 211 20, 220 29, 220 40 C 220 51, 211 60, 200 60 Z M 200 52 C 207 52, 212 46, 212 40 C 212 34, 207 28, 200 28 C 193 28, 188 34, 188 40 C 188 46, 193 52, 200 52 Z" />
      </g>

      {/* Flag - Red */}
      <path 
        d="M 51 12 C 35 6, 20 12, 12 18 C 22 20, 35 24, 51 22 V 12 Z" 
        fill={red} 
      />
    </svg>
  );
};