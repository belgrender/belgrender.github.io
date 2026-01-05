import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-base font-semibold transition-all duration-300 rounded-lg shadow-sm group";
  
  const variants = {
    primary: "bg-brand-terracotta text-white hover:bg-brand-terracottaHover shadow-brand-terracotta/30",
    secondary: "bg-brand-teal text-white hover:bg-brand-tealDark",
    outline: "border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
  };

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
};

export default Button;