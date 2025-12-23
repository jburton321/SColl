import styled from "styled-components";

const StyledComponent1Variant23 = styled.div`
  flex-shrink: 0;
  width: 19.3px;
  height: 19.3px;
  position: relative;
  overflow: visible;
`;

export const Component1Variant23 = ({
  variant = "1",
  className,
  style,
  ...props
}) => {
  const variantsClassName = "variant-" + variant;

  return (
    <img
      className={
        "component-1-variant-23 " + className + " " + variantsClassName
      }
      src="component-1-variant-23.svg"
    />
  );
};
