import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { SpeedQuizCategory, SpeedQuizCount, SPEED_QUIZ_COUNT } from "./common";
import { SpeedQuizGeneratorContainer, SpeedQuizList } from "./components";
import { SpeedQuizData } from "./quizData";

const Container = styled("div", { label: "SpeedQuiz" })(() => {
  return {
    height: "100%",
    position: "relative"
  };
});

const SpeedQuiz = () => {
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [categories, setCategories] = useState<SpeedQuizCategory[]>([]);
  const [count, setCount] = useState<SpeedQuizCount>(SPEED_QUIZ_COUNT[0]);
  const [quizList, setQuizList] = useState<SpeedQuizData[]>([]);
  const [answers, setAnswers] = useState([]);
  const [isQuizPage, setIsQuizPage] = useState(false);

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

  const onChangeIsQuizPage = useCallback(
    () => setIsQuizPage(prev => !prev),
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
        isQuizPage={isQuizPage}
        onChangeIsQuizPage={onChangeIsQuizPage}
      />
      <SpeedQuizList
        isQuizPage={isQuizPage}
        onChangeIsQuizPage={onChangeIsQuizPage}
      />
    </Container>
  );
};

export default SpeedQuiz;
