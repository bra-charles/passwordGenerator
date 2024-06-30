import React, { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import StrengthMeterBox from "./PasswordStrengthColorBox";
import { PasswordComplexityConfig } from "../utils/generatePassword";
import { computePasswordStrength } from "../utils/passwordStrength";

export default function MainPasswordStrength(
    config: PasswordComplexityConfig[]
) {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<string>("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setStrength(computePasswordStrength(event.target.value.length, config));
  };

  return (
    <div>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <PasswordStrengthMeter strength={strength} />
      <StrengthMeterBox strength={strength} />
    </div>
  );
}


