import styled from "@emotion/styled";
import { maxWidth } from "src/common";

const Container = styled("header", {
  label: "Header"
})(() => {
  return {
    backgroundColor: "#333333"
  };
});

const Contents = styled("div", {
  label: "HeaderContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ce1919"
  };
});

const Header = () => {
  return (
    <Container>
      <Contents>
        <span>개발자 상식 Quiz</span>
      </Contents>
    </Container>
  );
};

export default Header;
