import styled from "styled-components";

const StyledButtonProperty1Default = styled.div`
  background: #c81b30;
  border-radius: 4px;
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
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
`;
const StyledGetAQuote = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Inter-Medium", sans-serif;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.7px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  width: 152.87px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonProperty1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledButtonProperty1Default style={style}>
      <img
        className={"svg " + className + " " + variantsClassName}
        src="svg0.svg"
      />
      <StyledGetAQuote>GET A QUOTE </StyledGetAQuote>
    </StyledButtonProperty1Default>
  );
};
