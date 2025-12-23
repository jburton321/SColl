import styled from "styled-components";

const StyledHandlerHoverTrue = styled.div`
  flex-shrink: 0;
  width: 128px;
  height: 1425px;
  position: relative;
`;
const StyledLine = styled.div`
  width: 0px;
  height: 100%;
  position: absolute;
  left: 50%;
  translate: -50%;
  bottom: 0%;
  top: 0%;
  overflow: visible;
`;
const StyledHandle = styled.div`
  position: absolute;
  inset: 0;
`;
const StyledBase = styled.div`
  background: #ffffff;
  border-radius: 50%;
  width: 116px;
  height: 116px;
  position: absolute;
  left: 50%;
  translate: -50% -50%;
  top: 50%;
`;
const StyledArrows = styled.div`
  width: 48px;
  height: 24px;
  position: absolute;
  left: 50%;
  translate: -50% -50%;
  top: 50%;
  overflow: visible;
`;
const StyledLine2 = styled.div`
  opacity: 0.05;
  width: 0px;
  height: 50px;
  position: absolute;
  left: 50%;
  translate: -50% -50%;
  top: 50%;
  overflow: visible;
`;

export const HandlerHoverTrue = ({
  hover = "false",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "hover-" + hover;

  return (
    <StyledHandlerHoverTrue style={style}>
      <img
        className={"line " + className + " " + variantsClassName}
        src="line0.svg"
      />
      <StyledBase></StyledBase>
      <img className="arrows" src="arrows0.svg" />
      <img className="line2" src="line1.svg" />
    </StyledHandlerHoverTrue>
  );
};
