import styled from "styled-components";

import { HandlerHoverTrue } from "../HandlerHoverTrue/HandlerHoverTrue.jsx";

const StyledComparisonSliderHandlerPositionCenter = styled.div`
  flex-shrink: 0;
  height: 1425px;
  position: relative;
  box-shadow: 0px 40px 120px 0px rgba(31, 31, 25, 0.6);
`;
const StyledImagesWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0%;
  top: 0%;
  overflow: hidden;
`;
const StyledBeforeWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 50%;
  left: 0%;
  bottom: 0%;
  top: 0%;
  overflow: visible;
`;
const StyledAfterWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0%;
  left: 50%;
  bottom: 0%;
  top: 0%;
  overflow: visible;
`;
const StyledHandlerWrapper = styled.div`
  width: 128px;
  position: absolute;
  left: 50%;
  translate: -50%;
  bottom: 0px;
  top: 0px;
`;
const StyledHandlerInstance = styled.div`
  width: 100%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0px;
  top: 0px;
`;
const StyledCredits = styled.div`
  color: #ffffff;
  text-align: right;
  font-family: "Inter-Regular", sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export const ComparisonSliderHandlerPositionCenter = ({
  handlerPosition = "center",
  visibleComponent = undefined,
  visibleComponent2 = undefined,
  className,
  style,
  ...props
}) => {
  const variantsClassName = "handler-position-" + handlerPosition;

  return (
    <StyledComparisonSliderHandlerPositionCenter style={style}>
      <StyledImagesWrapper>
        <img
          className={"before-wrapper " + className + " " + variantsClassName}
          src="before-wrapper0.svg"
        />
        <img className="after-wrapper" src="after-wrapper0.svg" />
      </StyledImagesWrapper>
      <StyledHandlerWrapper>
        <HandlerHoverTrue
          hover="true"
          style={{
            width: "100%",
            position: "absolute",
            right: "0%",
            left: "0%",
            bottom: "0px",
            top: "0px",
            flexShrink: "unset",
            height: "unset",
          }}
        ></HandlerHoverTrue>
      </StyledHandlerWrapper>
      <StyledCredits>
        <span>
          <span className="credits-span">Photo by</span>
          <span className="credits-span2">Andrew Liu</span>
          <span className="credits-span">on</span>
          <span className="credits-span2">Unsplash</span>
        </span>{" "}
      </StyledCredits>
    </StyledComparisonSliderHandlerPositionCenter>
  );
};
