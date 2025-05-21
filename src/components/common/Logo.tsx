import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  vertical?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false, vertical = false }) => {
  const logoSrc = vertical
    ? '/logo-vertical.png'
    : '/logo.png';
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc}
        alt="levelUp"
        className={`h-12 ${className}`}
      />
    </div>
  );
};

export default Logo;