import styled from "@emotion/styled";

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

const Container = styled("div", {
  label: "ButtonGroup"
})(() => {
  return {
    "& > [data-type='button']:first-of-type": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    "& > [data-type='button']:last-of-type": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeft: 0
    },
    "& > [data-type='button']:not(:first-of-type, :last-of-type)": {
      borderRadius: 0,
      borderLeft: 0
    }
  };
});

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, className } = props;
  return <Container className={className}>{children}</Container>;
};

export default ButtonGroup;
