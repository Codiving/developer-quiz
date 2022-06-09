import styled from "@emotion/styled";
import { useCallback, useMemo, useState } from "react";
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
    flexDirection: "column",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    transition: "all 0.5s",
    ...css
  };
});

const SpeedQuizList = (props: SpeedQuizListProps) => {
  const { isQuizPage, onChangeIsQuizPage, quizList, answers } = props;
  const [index, setIndex] = useState(0);

  const totalCount = useMemo(() => quizList.length, [quizList.length]);

  const onChangeIndex = useCallback(() => setIndex(prev => prev + 1), []);

  return (
    <Container isQuizPage={isQuizPage}>
      {index < totalCount && (
        <SpeedQuizItem
          {...quizList[index]}
          onChangeIndex={onChangeIndex}
          currentCount={index}
          totalCount={totalCount}
          {...props}
        />
      )}
    </Container>
  );
};

export default SpeedQuizList;
