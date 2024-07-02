import { useEffect, ChangeEvent } from "react";

type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

export default function PasswordLength({
  passwordLength,
  setPasswordLength,
}: PasswordLengthProps) {
  useEffect(() => {
    const rangeInput = document.getElementById(
      "passwordLength"
    ) as HTMLInputElement;
    if (rangeInput) {
      const updateBackground = () => {
        const value = rangeInput.value;
        const percentage =
          ((parseInt(value, 10) - parseInt(rangeInput.min, 10)) /
            (parseInt(rangeInput.max, 10) - parseInt(rangeInput.min, 10))) *
          100;
        rangeInput.style.background = `linear-gradient(to right, #A4FFAF 0%, 
        #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
      };

      rangeInput.addEventListener("input", updateBackground);
      updateBackground();

      return () => rangeInput.removeEventListener("input", updateBackground);
    }
  }, [passwordLength]);

  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10));
  }

  return (
    <div className="mb-4">
      <label className="flex items-center justify-between mb-2">
        <div className="text-AlmostWhite text-[1rem] md:text-sm lg:text-[1rem] ">
          Character Length
        </div>
        <div className="text-NeonGreen text-xl md:text-lg lg:text-xl">
          {passwordLength}
        </div>
      </label>
      <input
        type="range"
        id="passwordLength"
        min="0"
        max="20"
        value={passwordLength}
        className="w-full appearance-none h-1 range-input"
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
