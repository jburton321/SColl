import styled from "styled-components";

const StyledOverlayBorderOverlayBlurProperty1Default = styled.div`
  background: rgba(24, 24, 27, 0.5);
  border-radius: 6.43px;
  border-style: solid;
  border-color: rgba(39, 39, 42, 0.5);
  border-width: 0.8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 165px;
  position: relative;
  backdrop-filter: blur(1.61px);
`;

export const OverlayBorderOverlayBlurProperty1Default = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <StyledOverlayBorderOverlayBlurProperty1Default
      style={style}
    ></StyledOverlayBorderOverlayBlurProperty1Default>
  );
};
