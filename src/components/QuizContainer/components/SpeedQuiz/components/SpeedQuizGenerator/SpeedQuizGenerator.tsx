import styled from "@emotion/styled";
import Typography from "src/components/Typography";
import { SpeedQuizGeneratorProps } from "../../types";
import { SpeedQuizCateogory } from "./components";

const Container = styled("div", {
  label: "SpeedQuizGenerator"
})(() => {
  return {
    backgroundColor: "#ffe579"
  };
});

const MainTitle = styled(Typography, {
  label: "MainTitle"
})(() => {
  return {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 40
  };
});

const CategoryTitle = styled(Typography, {
  label: "CategoryTitle"
})(() => {
  return {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 28,
    marginBottom: "1rem"
  };
});

const CategorySubtitle = styled(Typography, {
  label: "CategorySubtitle"
})(() => {
  return {
    textAlign: "center",
    color: "#747474"
  };
});

const SpeedQuizGenerator = (props: SpeedQuizGeneratorProps) => {
  return (
    <Container>
      <MainTitle component="h2">Speed Quiz</MainTitle>
      <div style={{ marginTop: "2rem" }}>
        <CategoryTitle component="h3">Quiz Categories</CategoryTitle>
        <CategorySubtitle component="p">
          Quiz 풀고 싶은 카테고리를 선택하세요. (중복 가능)
        </CategorySubtitle>
      </div>
      <SpeedQuizCateogory {...props} />
    </Container>
  );
};

export default SpeedQuizGenerator;
