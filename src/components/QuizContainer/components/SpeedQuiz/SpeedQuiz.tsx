import styled from "@emotion/styled";
import { SpeedQuizGenerator, SpeedQuizList } from "./components";

const Container = styled("div", { label: "SpeedQuiz" })(() => {
  return {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr"
  };
});

const SpeedQuiz = () => {
  return (
    <Container>
      <SpeedQuizGenerator />
      <SpeedQuizList />
    </Container>
  );
};

export default SpeedQuiz;
