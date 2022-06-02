import styled from "@emotion/styled";
import Typography from "src/components/Typography";
import { SpeedQuizGeneratorContainerProps } from "../../types";
import { SpeedQuizCateogory, SpeedQuizGenerator } from "./components";

const Container = styled("div", {
  label: "SpeedQuizGeneratorContainer"
})<{ isQuizPage: boolean }>(({ isQuizPage }) => {
  const css = isQuizPage
    ? { opacity: 0, zIndex: 0 }
    : { opacity: 1, zIndex: 1 };

  return {
    backgroundColor: "#fff",
    padding: "4rem 2rem",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    transition: "all 0.5s",
    ...css
  };
});

const MainTitle = styled(Typography, {
  label: "MainTitle"
})(() => {
  return {
    fontWeight: 600,
    fontSize: 40,
    marginRight: 10,
    marginBottom: "8rem"
  };
});

const Description = styled("div", {
  label: "Description"
})(() => {
  return {
    marginBottom: "2rem"
  };
});

const CategoryTitle = styled(Typography, {
  label: "CategoryTitle"
})(() => {
  return {
    fontWeight: 600,
    fontSize: 28,
    marginBottom: "1rem"
  };
});

const CategorySubtitle = styled(Typography, {
  label: "CategorySubtitle"
})(() => {
  return {
    color: "#747474"
  };
});

const SpeedQuizGeneratorContainer = (
  props: SpeedQuizGeneratorContainerProps
) => {
  const { isQuizPage } = props;
  return (
    <Container isQuizPage={isQuizPage}>
      <MainTitle component="h2">Speed Quiz</MainTitle>
      <Description>
        <CategoryTitle component="h3">Quiz Categories</CategoryTitle>
        <CategorySubtitle component="p">
          Quiz 풀고 싶은 카테고리를 선택하세요. (중복 가능)
        </CategorySubtitle>
      </Description>
      <SpeedQuizCateogory {...props} />
      <SpeedQuizGenerator {...props} />
    </Container>
  );
};

export default SpeedQuizGeneratorContainer;
