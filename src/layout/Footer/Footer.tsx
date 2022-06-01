import styled from "@emotion/styled";
import { Typography } from "src/components";

const Container = styled("footer", {
  label: "FooterContainer"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6d6d6"
  };
});

const Footer = () => {
  return (
    <Container>
      <Typography>Made by Codiving</Typography>
    </Container>
  );
};

export default Footer;
