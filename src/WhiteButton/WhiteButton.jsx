import styled from "styled-components";

const StyledWhiteButton = styled.div`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 251px;
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
const StyledScheduleService = styled.div`
  color: #dc2626;
  text-align: center;
  font-family: "Inter-Bold", sans-serif;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.7px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  width: 152.87px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteButton = ({
  text = "SCHEDULE SERVICE",
  className,
  style,
  ...props
}) => {
  return (
    <StyledWhiteButton style={style}>
      <img className={"svg " + className} src="svg0.svg" />
      <StyledScheduleService>{text} </StyledScheduleService>
    </StyledWhiteButton>
  );
};
