import styled from "styled-components";

const StyledButtonProperty1Default2 = styled.div`
  background: #2b2b2b;
  border-radius: 4px;
  border-style: solid;
  border-color: #dc2626;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
`;
const StyledSvg = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  position: relative;
  overflow: visible;
`;
const StyledCallNow = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Inter-Medium", sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  width: 152.87px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonProperty1Default2 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledButtonProperty1Default2 style={style}>
      <img
        className={"svg " + className + " " + variantsClassName}
        src="svg0.svg"
      />
      <StyledCallNow>CALL NOW </StyledCallNow>
    </StyledButtonProperty1Default2>
  );
};
