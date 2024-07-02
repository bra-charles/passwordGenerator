import styled from "styled-components";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    gap: 8px; // Adjust gap for larger screens
    margin-bottom: 0.6rem; // Adjust margin for larger screens
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide the default checkbox
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 13px;
  height: 13px;
  background: ${({ checked }) => (checked ? "#A4FFAF" : "#24232C")};
  border: 0.5px solid;
  border-color: ${({ checked }) => (checked ? "#A4FFAF" : "#E6E5EA")};
  transition: all 150ms;
  position: relative;

  &:hover {
    border-color: #a4ffaf;
    width: 14px;
    height: 14px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0.9px;
    left: 4px;
    width: 4px;
    height: 9.2px;
    border: solid #18171f;
    border-width: 0 2.3px 2.3px 0;
    transform: ${({ checked }) => (checked ? "rotate(45deg)" : "rotate(0deg)")};
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: all 150ms;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer; // Indicate clickable behavior
  margin-left: 0.5rem; // Use rem or em for spacing
  font-size: 1rem;
`;

export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange() {
    setIncludeUppercase(!includeUppercase);
  }

  return (
    <StyledCheckboxContainer>
      <HiddenCheckbox
        id="includeUppercase"
        checked={includeUppercase}
        onChange={handleIncludeUppercaseChange}
      />
      <StyledCheckbox
        checked={includeUppercase}
        onClick={handleIncludeUppercaseChange}
      />
      <StyledLabel htmlFor="includeUppercase">
        Include Uppercase Letters
      </StyledLabel>
    </StyledCheckboxContainer>
  );
}
