import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg";
  
  const variants = {
    primary: "bg-dolfoRed text-white hover:bg-red-600 hover:shadow-red-500/30",
    secondary: "bg-dolfoBlue text-white hover:bg-blue-700 hover:shadow-blue-500/30",
    outline: "border-2 border-dolfoBlue text-dolfoBlue hover:bg-dolfoBlue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};