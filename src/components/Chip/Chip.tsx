import styled from "@emotion/styled";

interface ChipProps {
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

const Container = styled("div", {
  label: "Chip"
})<{ bgColor: string; color: string }>(({ bgColor, color }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "0.2em",
    padding: "0.5em",
    width: "fit-content",
    borderRadius: 24,
    color: Boolean(color) ? color : "black",
    background: Boolean(bgColor) ? bgColor : "transparent",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    cursor: "pointer"
  };
});

const IconWrapper = styled("div", {
  label: "IconWrapper"
})(() => {
  return {
    display: "flex"
  };
});

const Chip = (props: ChipProps) => {
  const {
    className,
    startIcon,
    endIcon,
    children,
    bgColor = "",
    color = "",
    onClick = () => {}
  } = props;
  return (
    <Container
      className={className}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
    >
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      {children}
      {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </Container>
  );
};

export default Chip;
