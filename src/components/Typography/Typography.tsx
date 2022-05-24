import styled from "@emotion/styled";

interface Props {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  children: React.ReactNode;
  fontWeight?: number;
  fontSize?: number;
  className?: string;
  lineHeight?: string;
  onClick?: () => void;
}

const Container = styled("span", {
  label: "Typography"
})<{ fontWeight: number; fontSize: number; lineHeight: string }>(
  ({ fontWeight, fontSize, lineHeight }) => {
    return {
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight
    };
  }
);

const Typography = (props: Props) => {
  const {
    component = "span",
    children,
    fontWeight = 400,
    fontSize = 16,
    lineHeight = "initial",
    className,
    onClick
  } = props;
  return (
    <Container
      onClick={onClick}
      as={component}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      className={className}
    >
      {children}
    </Container>
  );
};

export default Typography;
