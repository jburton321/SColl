import styled from "styled-components";

const StyledStarHalfNoNoneNo = styled.div`
  flex-shrink: 0;
  width: 9px;
  height: 8.5px;
  position: relative;
`;
const StyledStar = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0%;
  left: 0%;
  bottom: 0%;
  top: 0%;
  overflow: visible;
`;

export const StarHalfNoNoneNo = ({
  half = "no",
  none = "no",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "half-" + half + " none-" + none;

  return (
    <StyledStarHalfNoNoneNo style={style}>
      <img
        className={"star " + className + " " + variantsClassName}
        src="star0.svg"
      />
    </StyledStarHalfNoNoneNo>
  );
};
