import {PasswordComplexityConfig} from "./generatePassword"  
 
// defines password strength
enum PasswordStrength {
	tooWeak = 'TOO WEAK',
	weak = 'WEAK',
	medium = 'MEDIUM',
	strong = 'STRONG',
}

function computePasswordStrength(
	length: number,
	config: PasswordComplexityConfig[]
) {
	let passwordStrengthScore = 0;

	if (length >= 8) {
		passwordStrengthScore += 1;
	}

	for (let i = 0; i < config.length; i++) {
		let currentConfig = config[i];
		if (currentConfig.value) {
			passwordStrengthScore += 1;
		}
	}

	let strength: PasswordStrength;
	switch (passwordStrengthScore) {
		case 0:
		case 1:
			strength = PasswordStrength.tooWeak;
			break;
		case 2:
			strength = PasswordStrength.weak;
			break;
		case 3:
		case 4:
			strength = PasswordStrength.medium;
			break;
		default:
			strength = PasswordStrength.strong;
	}

	return strength;
}

// console.log(computePasswordStrength(5, config));

export { computePasswordStrength }

