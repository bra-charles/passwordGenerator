import { useState } from "react";
import CopyIcon from "./components/CopyIconSvg";
import ArrowRightIcon from "./components/ArrowRightSvg";
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
          setTimeout(() => setCopied(false), 2000); // Reset copied state after 3 seconds
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
     items-center min-h-screen bg-VeryDarkGrey text-AlmostWhite p-4"
    >
      <div className="text-Grey text-lg  mb-1">Password Generator</div>
      <div
        className={`bg-DarkGrey text-AlmostWhite px-3 py-3 
          break-all flex justify-between items-center w-full max-w-[25rem] mb-0 md:mb-1 lg:mb-2`}
      >
        {password ? (
          <div className="text-xl lg:text-2xl">{password}</div>
        ) : (
          <div className="text-lg md:text-xl lg:text-2xl text-gray-600">
            P4$5W0rD!
          </div>
        )}
        <button
          onClick={handleCopyClick}
          className="flex items-center hover:text-AlmostWhite"
        >
          {copied && (
            <span className="text-xs md:text-xs lg:text-sm text-NeonGreen mr-2 md:mr-3 lg:mr-3">
              COPIED
            </span>
          )}
          <CopyIcon className="text-NeonGreen hover:text-AlmostWhite w-4 h-5" />
        </button>
      </div>

      <div className="w-full max-w-[25rem] bg-DarkGrey p-4">
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
          className="px-4 py-3 bg-NeonGreen text-VeryDarkGrey w-full border border-solid
           hover:border-NeonGreen hover:text-NeonGreen hover:bg-DarkGrey group transition-all 
            duration-300 uppercase flex gap-3 justify-center items-center mb-1 shadow-lg
            text-sm md:text-lg lg:text-lg"
        >
          Generate
          <ArrowRightIcon
            className="w-3 h-3 ml-2 transition-colors duration-200 
             text-VeryDarkGrey group-hover:text-NeonGreen"
          />
        </button>
      </div>
    </div>
  );
}
