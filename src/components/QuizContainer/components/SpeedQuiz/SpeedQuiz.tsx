import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { SpeedQuizCategory, SpeedQuizCount, SPEED_QUIZ_COUNT } from "./common";
import { SpeedQuizGeneratorContainer, SpeedQuizList } from "./components";

const Container = styled("div", { label: "SpeedQuiz" })(() => {
  return {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  };
});

const SpeedQuiz = () => {
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [categories, setCategories] = useState<SpeedQuizCategory[]>([]);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState<SpeedQuizCount>(SPEED_QUIZ_COUNT[0]);

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
      />
      <SpeedQuizList />
    </Container>
  );
};

export default SpeedQuiz;
