import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { SpeedQuizListProps } from "../../types";
import { SpeedQuizItem } from "./components";

const Container = styled("div", {
  label: "SpeedQuizList"
})<{ isQuizPage: boolean }>(({ isQuizPage }) => {
  const css = !isQuizPage
    ? { opacity: 0, zIndex: 0 }
    : { opacity: 1, zIndex: 1 };

  return {
    backgroundColor: "#fff", //"#F5EEDC",
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
  const { isQuizPage, onChangeIsQuizPage, quizList } = props;
  const [index, setIndex] = useState(0);

  const totalCount = useMemo(() => quizList.length, [quizList.length]);

  return (
    <Container isQuizPage={isQuizPage}>
      <button onClick={onChangeIsQuizPage}>asd</button>
      {index < totalCount && (
        <SpeedQuizItem
          {...quizList[index]}
          onChangeIndex={() => setIndex(index + 1)}
          currentCount={index}
          totalCount={totalCount}
        />
      )}
    </Container>
  );
};

export default SpeedQuizList;
