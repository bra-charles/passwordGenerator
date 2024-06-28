/// defines the complexity of the password
export enum PasswordComplexity {
  includeNumbers,
  includeUpperCase,
  includeLowercase,
  includeSymbols,
}

/// used to configure the password
export interface PasswordComplexityConfig {
  type: PasswordComplexity;
  value: Boolean;
}

/// generates password based on length and config from ui
function generatePassword(length: number, config: PasswordComplexityConfig[]) {
  let password: string[] = [];
  for (let i = 0; i < length; i++) {
    let optionIdx = i % config.length;

    while (!config[optionIdx].value) {
      optionIdx = (optionIdx + 1) % config.length;
    }

    switch (config[optionIdx].type) {
      case PasswordComplexity.includeNumbers:
        password.push(
          getCharBasedOnComplexity(PasswordComplexity.includeNumbers)
        );
        break;
      case PasswordComplexity.includeUpperCase:
        password.push(
          getCharBasedOnComplexity(PasswordComplexity.includeUpperCase)
        );
        break;
      case PasswordComplexity.includeLowercase:
        password.push(
          getCharBasedOnComplexity(PasswordComplexity.includeLowercase)
        );
        break;
      case PasswordComplexity.includeSymbols:
        password.push(
          getCharBasedOnComplexity(PasswordComplexity.includeSymbols)
        );
        break;
    }
  }
  return password.join("");
}

/// gets a random generated char based on PasswordComplexity type
function getCharBasedOnComplexity(type: PasswordComplexity): string {
  let token;
  switch (type) {
    case PasswordComplexity.includeUpperCase:
      token = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case PasswordComplexity.includeNumbers:
      token = "0123456789";
      break;
    case PasswordComplexity.includeLowercase:
      token = "abcdefghijklmnopqrstuvwxyz";
      break;
    case PasswordComplexity.includeSymbols:
      token = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
      break;
  }
  const randomIndex = Math.floor(Math.random() * token.length);
  return token[randomIndex];
}

/// data passed from the ui based on user selection
// let config: PasswordComplexityConfig[] = [
//   { type: PasswordComplexity.includeNumbers, value: true },
//   { type: PasswordComplexity.includeUpperCase, value: true },
//   { type: PasswordComplexity.includeLowercase, value: true },
//   { type: PasswordComplexity.includeSymbols, value: true },
// ];

// console.log(passwordGenerator(8, config));

export { generatePassword };
