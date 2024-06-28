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
      const value = rangeInput.value;
      const percentage =
        ((parseInt(value, 10) - parseInt(rangeInput.min, 10)) /
          (parseInt(rangeInput.max, 10) - parseInt(rangeInput.min, 10))) *
        100;
      rangeInput.style.background = `linear-gradient(to right, #A4FFAF 0%, 
      #A4FFAF ${percentage}%, #18171F ${percentage}%, #18171F 100%)`;
    }
  }, [passwordLength]);

  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10));
  }
  return (
    <div className="mb-4">
      <label className="flex items-center justify-between ">
        <div className="text-AlmostWhite ">Character Length</div>
        <div className="text-NeonGreen text-xl">{passwordLength}</div>
      </label>
      <input
        type="range"
        id="passwordLength"
        min="0"
        max="20"
        value={passwordLength}
        className="w-full appearance-none h-1"
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
