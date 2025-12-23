import styled from "styled-components";

const StyledButtonProperty1Default3 = styled.div`
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
  width: 50px;
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

export const ButtonProperty1Default3 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledButtonProperty1Default3 style={style}>
      <img
        className={"svg " + className + " " + variantsClassName}
        src="svg0.svg"
      />
    </StyledButtonProperty1Default3>
  );
};
