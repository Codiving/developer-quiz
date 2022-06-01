import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { SpeedQuizCategory } from "./common";
import { SpeedQuizGenerator, SpeedQuizList } from "./components";

const Container = styled("div", { label: "SpeedQuiz" })(() => {
  return {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr"
  };
});

const SpeedQuiz = () => {
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [categories, setCategories] = useState<SpeedQuizCategory[]>([]);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(5);

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

  return (
    <Container>
      <SpeedQuizGenerator
        onChangeOnlyBookmarked={onChangeOnlyBookmarked}
        categories={categories}
        onChangeCategories={onChangeCategories}
        onResetCategories={onResetCategories}
      />
      <SpeedQuizList />
    </Container>
  );
};

export default SpeedQuiz;
