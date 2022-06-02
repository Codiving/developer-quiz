import styled from "@emotion/styled";
import { SpeedQuizListProps } from "../../types";

const Container = styled("div", {
  label: "SpeedQuizList"
})<{ isQuizPage: boolean }>(({ isQuizPage }) => {
  const css = !isQuizPage
    ? { opacity: 0, zIndex: 0 }
    : { opacity: 1, zIndex: 1 };

  return {
    backgroundColor: "#F5EEDC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    transition: "all 0.5s",
    ...css
  };
});

const SpeedQuizList = (props: SpeedQuizListProps) => {
  const { isQuizPage, onChangeIsQuizPage } = props;
  return (
    <Container isQuizPage={isQuizPage}>
      <button onClick={onChangeIsQuizPage}>asd</button>
      <div>
        <div></div>
        <div>제목</div>
        <div>코드</div>
        <div>리스트</div>
        <div>제출</div>
      </div>
    </Container>
  );
};

export default SpeedQuizList;
