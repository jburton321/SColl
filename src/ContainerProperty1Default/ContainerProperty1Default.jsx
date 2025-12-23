import styled from "styled-components";

const StyledContainerProperty1Default = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  width: 68px;
  height: 68px;
  position: relative;
`;
const StyledBorder = styled.div`
  border-radius: 5.67px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 1.42px;
  align-self: stretch;
  flex-shrink: 0;
  height: 68px;
  position: relative;
`;
const StyledOverlayBorderOverlayBlur = styled.div`
  background: rgba(178, 34, 34, 0.2);
  border-radius: 5.67px;
  border-style: solid;
  border-color: rgba(220, 38, 38, 0.5);
  border-width: 0.71px;
  width: 45.33px;
  height: 45.33px;
  position: absolute;
  left: 50%;
  translate: -50% -50%;
  top: 50%;
  backdrop-filter: blur(3.54px);
`;
const StyledSvg = styled.div`
  width: 22.67px;
  height: 22.67px;
  position: absolute;
  left: calc(50% - 9.92px);
  top: 50%;
  translate: 0 -50%;
  overflow: visible;
`;

export const ContainerProperty1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledContainerProperty1Default style={style}>
      <StyledBorder>
        <StyledOverlayBorderOverlayBlur>
          <img
            className={"svg " + className + " " + variantsClassName}
            src="svg0.svg"
          />
        </StyledOverlayBorderOverlayBlur>
      </StyledBorder>
    </StyledContainerProperty1Default>
  );
};
