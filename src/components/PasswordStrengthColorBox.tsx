import React from 'react';

interface StrengthMeterBoxProps {
  strength: string; // "tooWeak", "weak", "medium", or "strong"
}

const StrengthMeterBox: React.FC<StrengthMeterBoxProps> = ({ strength }) => {
  const color: { [key: string]: string } = {
    tooWeak: '#F64A4A', // Red
    weak: '#FB7C58', // Orange
    medium: '#F8CD65', // Orange-ish yellow
    strong: '#A4FFAF', // Green
  };

  return <div className="strength-meter-box" style={{ backgroundColor: color[strength] }} />;
};

export default StrengthMeterBox;

