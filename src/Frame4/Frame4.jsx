import styled from "styled-components";

const StyledFrame4 = styled.div`
  background: #000000;
  padding: 0px 230px 0px 230px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 67px;
  position: relative;
`;
const StyledGroupSvg = styled.div`
  flex-shrink: 0;
  width: 172px;
  height: 25px;
  position: relative;
  overflow: visible;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
`;
const StyledContainer2 = styled.div`
  flex-shrink: 0;
  width: 139px;
  height: 24px;
  position: relative;
`;
const StyledBackground = styled.div`
  background: #dc2626;
  border-radius: 8px;
  width: 8px;
  height: 8px;
  position: absolute;
  left: 0px;
  top: 50%;
  translate: 0 -50%;
`;
const StyledComplimentary = styled.div`
  color: #ffffff;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.16px;
  font-weight: 700;
  position: absolute;
  left: 16px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledTwoYearCeramicUpgradeWithFullBodyPpf = styled.div`
  color: #cccccc;
  text-align: left;
  font-family: "Inter-Regular", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledContainer3 = styled.div`
  flex-shrink: 0;
  width: 403.3px;
  height: 50px;
  position: relative;
`;
const StyledButtonCallUsAt8777232781 = styled.div`
  border-radius: 8px;
  width: 143.75px;
  height: 36px;
  position: absolute;
  left: 0px;
  top: 50%;
  translate: 0 -50%;
`;
const StyledFrame3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 12px;
  top: 8px;
`;
const StyledSvg = styled.div`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
`;
const StyledNine452495886 = styled.div`
  color: #cccccc;
  text-align: center;
  font-family: "Inter-Medium", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledVerticalDivider = styled.div`
  background: rgba(255, 255, 255, 0.1);
  width: 1px;
  height: 20px;
  position: absolute;
  left: 159.75px;
  top: 50%;
  translate: 0 -50%;
`;
const StyledButton = styled.div`
  background: #c81b30;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 227px;
  height: 50px;
  position: absolute;
  left: 176.75px;
  top: 50%;
  translate: 0 -50%;
`;
const StyledSvg2 = styled.div`
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

export const Frame4 = ({
  text = "2-Year Ceramic Upgrade with full-body PPF",
  text2 = "(945) 249 5886",
  className,
  style,
  ...props
}) => {
  return (
    <StyledFrame4 style={style}>
      <img className={"group-svg " + className} src="group-svg0.svg" />
      <StyledContainer>
        <StyledContainer2>
          <StyledBackground></StyledBackground>
          <StyledComplimentary>Complimentary </StyledComplimentary>
        </StyledContainer2>
        <StyledTwoYearCeramicUpgradeWithFullBodyPpf>
          {text}{" "}
        </StyledTwoYearCeramicUpgradeWithFullBodyPpf>
      </StyledContainer>
      <StyledContainer3>
        <StyledButtonCallUsAt8777232781>
          <StyledFrame3>
            <img className="svg" src="svg0.svg" />
            <StyledNine452495886>{text2} </StyledNine452495886>
          </StyledFrame3>
        </StyledButtonCallUsAt8777232781>
        <StyledVerticalDivider></StyledVerticalDivider>
        <StyledButton>
          <img className="svg2" src="svg1.svg" />
          <StyledGetAQuote>GET A QUOTE </StyledGetAQuote>
        </StyledButton>
      </StyledContainer3>
    </StyledFrame4>
  );
};
