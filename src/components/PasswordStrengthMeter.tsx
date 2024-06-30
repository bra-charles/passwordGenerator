import React from 'react';

interface PasswordStrengthProps {
  strength: string; // "tooWeak", "weak", "medium", or "strong"
}

const PasswordStrengthMeter: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const strengthText = {
    tooWeak: 'TOO WEAK',
    weak: 'WEAK',
    medium: 'MEDIUM',
    strong: 'STRONG',
  }[strength];

  return (
    <div className="password-strength-meter">
      <span className={`strength-text ${strength}`}>{strengthText}</span>
    </div>
  );
};

export default PasswordStrengthMeter;
