import styled from "styled-components";

const StyledCardProperty1Default = styled.div`
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
const StyledFrame6180 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 368px;
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
const StyledGroupSvg = styled.div`
  flex-shrink: 0;
  width: 227px;
  height: 27px;
  position: relative;
  overflow: visible;
`;
const StyledDocumentedPtgReadings = styled.div`
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
const StyledWeDocumentClearcoatDepthBeforeAndAfterSoYouKnowExactlyWhatRemains = styled.div`
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

export const CardProperty1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledCardProperty1Default style={style}>
      <StyledFrame6180>
        <StyledFrame8>
          <img
            className={"group-svg " + className + " " + variantsClassName}
            src="group-svg0.svg"
          />
          <StyledDocumentedPtgReadings>
            Documented PTG Readings{" "}
          </StyledDocumentedPtgReadings>
          <StyledWeDocumentClearcoatDepthBeforeAndAfterSoYouKnowExactlyWhatRemains>
            We document clearcoat depth before and after, so you know exactly
            what remains.{" "}
          </StyledWeDocumentClearcoatDepthBeforeAndAfterSoYouKnowExactlyWhatRemains>
        </StyledFrame8>
      </StyledFrame6180>
    </StyledCardProperty1Default>
  );
};
