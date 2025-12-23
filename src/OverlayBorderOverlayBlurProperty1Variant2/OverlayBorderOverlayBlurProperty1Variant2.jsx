import styled from "styled-components";

const StyledOverlayBorderOverlayBlurProperty1Variant2 = styled.div`
  border-radius: 6.43px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 165px;
  position: relative;
  overflow: visible;
`;

export const OverlayBorderOverlayBlurProperty1Variant2 = ({
  property1 = "default",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "overlay-border-overlay-blur-property-1-variant-2 " +
        className +
        " " +
        variantsClassName
      }
      src="overlay-border-overlay-blur-property-1-variant-2.svg"
    />
  );
};
