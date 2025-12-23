import styled from "styled-components";

const StyledTwoProperty1Variant2 = styled.div`
  background: rgba(178, 34, 34, 0.2);
  border-radius: 8px;
  border-style: solid;
  border-color: #dc2626;
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

export const TwoProperty1Variant2 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledTwoProperty1Variant2 style={style}></StyledTwoProperty1Variant2>
  );
};
