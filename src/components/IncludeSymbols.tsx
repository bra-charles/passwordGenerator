import styled from "styled-components";

type IncludeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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
  background: ${({ checked }) => (checked ? '#A4FFAF' : '#24232C')};
  border: 1px solid;
  border-radius: 1.2px;
  transition: all 150ms;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 3.8px;
    width: 4px;
    height: 9px;
    border: solid #18171F;
    border-width: 0 2.3px 2.3px 0;
    transform: ${({ checked }) => (checked ? 'rotate(45deg)' : 'rotate(0deg)')};
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: all 150ms;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeSymbolsProps) {
  function handleIncludeSymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }

  return (
    <StyledCheckboxContainer>
      <HiddenCheckbox
        id="includeSymbols"
        checked={includeSymbols}
        onChange={handleIncludeSymbolsChange}
      />
      <StyledCheckbox
        checked={includeSymbols}
        onClick={handleIncludeSymbolsChange}
      />
      <StyledLabel htmlFor="includeSymbols">
        Include Symbols
      </StyledLabel>
    </StyledCheckboxContainer>
  );
}
