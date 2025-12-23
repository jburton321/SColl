import styled from "styled-components";

const StyledTwoProperty1Default = styled.div`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 8px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.1);
  border-width: 1px;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  height: 102px;
  position: relative;
`;

export const TwoProperty1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return <StyledTwoProperty1Default style={style}></StyledTwoProperty1Default>;
};
