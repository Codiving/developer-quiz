import styled from "@emotion/styled";
import Link from "next/link";
import { maxWidth } from "src/common";
import { Typography } from "src/components";

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
    width: "90%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ce1919"
  };
});

const MainTitle = styled(Typography, {
  label: "MainTitle"
})(() => {
  return {
    cursor: "pointer"
  };
});

const Header = () => {
  return (
    <Container>
      <Contents>
        <Link href="/">
          <MainTitle component="h1" fontSize={32} fontWeight={600}>
            개발자 상식 Quiz
          </MainTitle>
        </Link>
      </Contents>
    </Container>
  );
};

export default Header;
