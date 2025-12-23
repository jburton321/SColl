import styled from "styled-components";

const StyledCardProperty1Default3 = styled.div`
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
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-end;
  height: 392px;
  position: relative;
`;
const StyledFrame8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 340.8px;
  position: relative;
`;
const StyledD9A9SYTif = styled.div`
  flex-shrink: 0;
  width: 0px;
  height: 0px;
  position: relative;
  overflow: visible;
`;
const StyledMultiStageDefectRemoval = styled.div`
  color: #ffffff;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 25.22431755065918px;
  line-height: 24px;
  font-weight: 700;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledWeWorkInControlled2X2FootSectionsAtMeasuredRpMsRemoving95OfScratchesWithoutHeatDamage = styled.div`
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

export const CardProperty1Default3 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledCardProperty1Default3 style={style}>
      <StyledFrame8>
        <img
          className={"d-9-a-9-s-y-tif " + className + " " + variantsClassName}
          src="d-9-a-9-s-y-tif0.svg"
        />
        <StyledMultiStageDefectRemoval>
          Multi-Stage Defect Removal{" "}
        </StyledMultiStageDefectRemoval>
        <StyledWeWorkInControlled2X2FootSectionsAtMeasuredRpMsRemoving95OfScratchesWithoutHeatDamage>
          We work in controlled 2x2-foot sections at measured RPMs, removing
          95%+ of scratches without heat damage.{" "}
        </StyledWeWorkInControlled2X2FootSectionsAtMeasuredRpMsRemoving95OfScratchesWithoutHeatDamage>
      </StyledFrame8>
    </StyledCardProperty1Default3>
  );
};
