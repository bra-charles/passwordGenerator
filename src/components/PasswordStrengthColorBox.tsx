import React from "react";
import styled from "styled-components";

interface StrengthMeterBoxProps {
  numberOfColoredBoxes: number;
  color: string;
}
interface StyledDivProps {
  backgroundColor: string | null;
}

const StyledDiv = styled.div<StyledDivProps>`
  display: inline-block;
  width: 8px;
  height: 24px;
  margin: 3px;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => (props.backgroundColor ? "none" : "2px solid #E6E5EA")};
`;

const StrengthMeterBox: React.FC<StrengthMeterBoxProps> = ({
  numberOfColoredBoxes,
  color,
}) => {
  // Ensure length is between 0 and 4
  const numBoxes = Math.min(Math.max(numberOfColoredBoxes, 0), 4);

  const boxes = Array.from({ length: 4 }, (_, index) => (
    <StyledDiv key={index} backgroundColor={index < numBoxes ? color : null} />
  ));

  return <div>{boxes}</div>;
};

export default StrengthMeterBox;
