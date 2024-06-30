import { useState } from "react";
import CopyIcon from "./components/CopyIconSvg"; // Adjust the path as necessary
import ArrowRightIcon from "./components/ArrowRightSvg"; // Adjust the path as necessary
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import MainPasswordStrength from "./components/MainPasswordStrength";
import { generatePassword } from "./utils/generatePassword.tsx";

import {
  PasswordComplexity,
  PasswordComplexityConfig,
} from "./utils/generatePassword.tsx";
import {
  PasswordStrengthData,
  computePasswordStrength,
} from "./utils/passwordStrength.ts";

export default function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [strengthData, setStrengthData] = useState<PasswordStrengthData | null>(
    null
  );

  function handleGeneratePassword() {
    const config: PasswordComplexityConfig[] = [
      { type: PasswordComplexity.includeNumbers, value: includeNumbers },
      { type: PasswordComplexity.includeUpperCase, value: includeUppercase },
      { type: PasswordComplexity.includeLowercase, value: includeLowercase },
      { type: PasswordComplexity.includeSymbols, value: includeSymbols },
    ];

    const newPassword = generatePassword(passwordLength, config);

    setPassword(newPassword);
    setStrengthData(computePasswordStrength(passwordLength, config));
  }

  function handleCopyClick() {
    if (password) {
      navigator.clipboard.writeText(password).then(
        () => {
          setCopied(true); // Set copied state to true on success
          setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
        }
        // (err) => {
        //   // ... my error handling
        // }
      );
    }
  }

  return (
    <div
      className="font-JetBrainsMono flex flex-col gap-4 justify-center
     items-center min-h-screen bg-VeryDarkGrey text-AlmostWhite"
    >
      <div className="text-Grey">Password Generator</div>
      <div
        className={`bg-DarkGrey text-AlmostWhite px-4 py-2 
          break-all flex justify-between items-center w-[22rem] mb-4`}
      >
        {password ? (
          <div className="text-xl">{password}</div>
        ) : (
          <div className="text-xl text-gray-600">P4$5W0rD!</div>
        )}
        <button
          onClick={handleCopyClick}
          className="flex items-center hover:text-AlmostWhite"
        >
          {copied && (
            <span className="text-xl text-NeonGreen mr-1">COPIED</span>
          )}
          <CopyIcon className="text-NeonGreen hover:text-AlmostWhite w-4 h-5 mr-2" />
        </button>
      </div>

      <div className="w-[22rem] bg-DarkGrey p-4">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <MainPasswordStrength strengthData={strengthData} />
        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 bg-NeonGreen text-VeryDarkGrey w-full border border-solid
           hover:border-NeonGreen hover:text-NeonGreen hover:bg-DarkGrey group transition-all 
           duration-300 uppercase flex gap-3 justify-center items-center  mb-1"
        >
          Generate{" "}
          <ArrowRightIcon
            className="w-3 h-3 ml-2 transition-colors duration-200 
             text-VeryDarkGrey group-hover:text-NeonGreen"
          />
        </button>
      </div>
    </div>
  );
}
