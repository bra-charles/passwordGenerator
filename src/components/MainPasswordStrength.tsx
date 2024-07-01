import styled from "styled-components";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import StrengthMeterBox from "./PasswordStrengthColorBox";
import { PasswordStrengthData } from "../utils/passwordStrength";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.3rem 1rem;
  margin: 1.2rem 0;
  background-color: #18171f;
  color: #e6e5ea;
`;

interface MainPasswordStrengthProps {
  strengthData: PasswordStrengthData | null;
}

const MainPasswordStrength: React.FC<MainPasswordStrengthProps> = ({
  strengthData,
}) => {
  const defaultStrength = ""; // Placeholder value when no password data
  const defaultColor = "transparent";

  return (
    <Container>
      <span style={{ color: "#817D92", fontSize: "16px" }}>STRENGTH</span>
      <div style={{ display: "flex", gap: "7px", marginTop: "6px" }}>
        <PasswordStrengthMeter
          strength={strengthData?.strength || defaultStrength}
        />
        <StrengthMeterBox
          color={strengthData?.color || defaultColor}
          numberOfColoredBoxes={strengthData?.boxLength || 0} // Set to 0 for no colored boxes
        />
      </div>
    </Container>
  );
};

export default MainPasswordStrength;
