import styled from "styled-components";

const StyledFrame6191Property1Default = styled.div`
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
const StyledFrame6327 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const StyledTwoYearCeramicUpgradeWithFullBodyPpf = styled.div`
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
const StyledFrame8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const StyledOne000ValueLimitedTimeOnly = styled.div`
  text-align: left;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Frame6191Property1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledFrame6191Property1Default style={style}>
      <StyledFrame6327>
        <StyledTwoYearCeramicUpgradeWithFullBodyPpf>
          2-Year Ceramic Upgrade with Full-Body PPF{" "}
        </StyledTwoYearCeramicUpgradeWithFullBodyPpf>
        <StyledFrame8>
          <StyledOne000ValueLimitedTimeOnly>
            <span>
              <span
                className={
                  "_1-000-value-limited-time-only-span " +
                  className +
                  " " +
                  variantsClassName
                }
              >
                ($1,000 Value)
                <br />
              </span>
              <span className="_1-000-value-limited-time-only-span2">
                — Limited Time Only.
              </span>
            </span>{" "}
          </StyledOne000ValueLimitedTimeOnly>
        </StyledFrame8>
      </StyledFrame6327>
    </StyledFrame6191Property1Default>
  );
};
