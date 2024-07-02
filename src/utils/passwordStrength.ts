import { PasswordComplexityConfig } from "./generatePassword";

// defines password strength
export enum PasswordStrength {
  tooWeak = "TOO WEAK!",
  weak = "WEAK",
  medium = "MEDIUM",
  strong = "STRONG",
}

export interface PasswordStrengthData {
  strength: PasswordStrength;
  color: string;
  boxLength: number;
}

function computePasswordStrength(
  length: number,
  config: PasswordComplexityConfig[]
): PasswordStrengthData {
  let passwordStrengthScore = 0;

  if (length >= 8) {
    passwordStrengthScore += 1;
  }

  for (let i = 0; i < config.length; i++) {
    const currentConfig = config[i];
    if (currentConfig.value) {
      passwordStrengthScore += 1;
    }
  }

  let result: PasswordStrengthData;
  switch (passwordStrengthScore) {
    case 0:
    case 1:
      result = {
        strength: PasswordStrength.tooWeak,
        color: "#F64A4A",
        boxLength: 1,
      };
      break;
    case 2:
      result = {
        strength: PasswordStrength.weak,
        color: "#FB7C58",
        boxLength: 2,
      };
      break;
    case 3:
    case 4:
      result = {
        strength: PasswordStrength.medium,
        color: "#F8CD65",
        boxLength: 3,
      };
      break;
    default:
      result = {
        strength: PasswordStrength.strong,
        color: "#A4FFAF",
        boxLength: 4,
      };
  }

  return result;
}

export { computePasswordStrength };
