import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { SpeedQuizCategory, SpeedQuizCount, SPEED_QUIZ_COUNT } from "./common";
import { SpeedQuizGeneratorContainer, SpeedQuizList } from "./components";
import { SpeedQuizData } from "./quizData";

const Container = styled("div", { label: "SpeedQuiz" })(() => {
  return {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(480px, 0.6fr) 1fr"
  };
});

const SpeedQuiz = () => {
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [categories, setCategories] = useState<SpeedQuizCategory[]>([]);
  const [count, setCount] = useState<SpeedQuizCount>(SPEED_QUIZ_COUNT[0]);
  const [quizList, setQuizList] = useState<SpeedQuizData[]>([]);
  const [answers, setAnswers] = useState([]);

  const onChangeOnlyBookmarked = useCallback(
    () => setOnlyBookmarked(prev => !prev),
    []
  );

  const onChangeCategories = useCallback((category: SpeedQuizCategory) => {
    setCategories(prev => {
      if (!prev.includes(category)) return [...prev, category];

      const newCategories = prev.filter(el => el !== category);
      return newCategories;
    });
  }, []);

  const onResetCategories = useCallback(() => setCategories([]), []);

  const onChangeCount = useCallback(
    (newCount: SpeedQuizCount) => setCount(newCount),
    []
  );

  const onChangeQuizList = useCallback(
    (newQuizList: SpeedQuizData[]) => setQuizList(newQuizList),
    []
  );

  return (
    <Container>
      <SpeedQuizGeneratorContainer
        onlyBookmarked={onlyBookmarked}
        onChangeOnlyBookmarked={onChangeOnlyBookmarked}
        categories={categories}
        onChangeCategories={onChangeCategories}
        count={count}
        onChangeCount={onChangeCount}
        onResetCategories={onResetCategories}
        onChangeQuizList={onChangeQuizList}
      />
      <SpeedQuizList />
    </Container>
  );
};

export default SpeedQuiz;
