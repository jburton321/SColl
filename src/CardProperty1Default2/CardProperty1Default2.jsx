import styled from "styled-components";

const StyledCardProperty1Default2 = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  border-radius: 16px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.1);
  border-width: 0.79px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
  justify-content: flex-start;
  height: 800px;
  position: relative;
  box-shadow: 0px 3.15px 3.15px 0px rgba(0, 0, 0, 0.25);
`;
const StyledFrame6181 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  width: 351px;
  position: relative;
`;
const StyledFrame8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17.34px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const StyledUltimateSurfaceProtection = styled.div`
  color: #ffffff;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 25.22431755065918px;
  line-height: 24px;
  font-weight: 700;
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledWeApplyAThickShieldThatStopsHighSpeedRockChipsAndPreventsChemicalEtching = styled.div`
  color: #cccccc;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardProperty1Default2 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledCardProperty1Default2 style={style}>
      <StyledFrame6181>
        <StyledFrame8>
          <StyledUltimateSurfaceProtection>
            Ultimate Surface Protection{" "}
          </StyledUltimateSurfaceProtection>
          <StyledWeApplyAThickShieldThatStopsHighSpeedRockChipsAndPreventsChemicalEtching>
            We apply a thick shield that stops high-speed rock chips and
            prevents chemical etching.{" "}
          </StyledWeApplyAThickShieldThatStopsHighSpeedRockChipsAndPreventsChemicalEtching>
        </StyledFrame8>
      </StyledFrame6181>
    </StyledCardProperty1Default2>
  );
};
