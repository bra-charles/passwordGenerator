import React from "react";
import { PasswordStrength } from "../utils/passwordStrength";

interface PasswordStrengthProps {
  strength: PasswordStrength | "" ; // "tooWeak", "weak", "medium", or "strong"
}

const PasswordStrengthMeter: React.FC<PasswordStrengthProps> = ({
  strength,
}) => {
  return (
    <div className="password-strength-meter">
      <span style={{ fontSize: '18px' }} className={`strength-text ${strength}`}>{strength.toString()}</span>
    </div>
  );
};

export default PasswordStrengthMeter;
