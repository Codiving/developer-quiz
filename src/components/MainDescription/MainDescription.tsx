import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import QuizContainer from "../QuizContainer";
import { Interview, SpeedQuiz } from "../QuizContainer/components";
import { Description } from "./components";
import { DescriptionData } from "./data";
import { QUIZ_CATEGORY } from "./types";

const Container = styled("section", {
  label: "MainDescription"
})(() => {
  return {
    margin: "5rem 0"
  };
});

const QuizComponents = new Map();

QuizComponents.set(QUIZ_CATEGORY[0], (props: any) => <SpeedQuiz {...props} />);
QuizComponents.set(QUIZ_CATEGORY[1], (props: any) => <Interview {...props} />);

const MainDescription = () => {
  const [open, setOpen] = useState(false);
  const [selectedCagtegory, selectedCategory] = useState("");

  const onSelectedCategory = useCallback(
    (quizCategory: string) => selectedCategory(quizCategory),
    []
  );

  const onCancelCategory = useCallback(() => selectedCategory(""), []);

  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!selectedCagtegory) return;

    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, [selectedCagtegory]);

  return (
    <>
      {open && (
        <QuizContainer onCloseBefore={onCancelCategory} onCloseAfter={onClose}>
          {!!selectedCagtegory && QuizComponents.get(selectedCagtegory)()}
        </QuizContainer>
      )}
      <Container>
        {QUIZ_CATEGORY.map((category, index) => {
          const data = DescriptionData.get(category);
          return (
            <Description
              key={category}
              isImageRight={!Boolean(index % 2)}
              category={category}
              selectedCagtegory={selectedCagtegory}
              onSelectedCategory={onSelectedCategory}
              {...data}
            />
          );
        })}
      </Container>
    </>
  );
};

export default MainDescription;
