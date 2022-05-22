import styled from "@emotion/styled";

const Container = styled("footer", {
  label: "FooterContainer"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7878b7"
  };
});

const Footer = () => {
  return (
    <Container>
      <span>Made by Codiving</span>
    </Container>
  );
};

export default Footer;
