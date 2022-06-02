import styled from "@emotion/styled";
import Button from "src/components/Button";
import ButtonGroup from "src/components/ButtonGroup";
import Typography from "src/components/Typography";
import { hexToRgbWithA } from "src/utils";
import { SPEED_QUIZ_COUNT } from "../../../../common";
import { SpeedQuizGeneratorProps } from "../../../../types";

const Container = styled("div", {
  label: "SpeedQuizGenerator"
})(() => {
  return {};
});

const QuizBookmarkCheckConatiner = styled("div", {
  label: "QuizBookmarkCheckConatiner"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    gap: 10
  };
});

const BookmarkRadioButton = styled("input", {
  label: "BookmarkRadioButton"
})(() => {
  return {
    cursor: "pointer"
  };
});

const OnlyBookmarkText = styled(Typography, {
  label: "OnlyBookmarkText"
})(() => {
  return {
    cursor: "pointer"
  };
});

const QuizCountSelector = styled("div", {
  label: "QuizCountSelector"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  };
});

const Description = styled("div", {
  label: "Description"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
    gap: "0.7em",
    color: "#747474"
  };
});

const GeneratorButton = styled(Button, {
  label: "GeneratorButton"
})<{ color: string }>(({ color }) => {
  const backgroundColor = hexToRgbWithA(color, 0.5);
  return {
    transition: "all .3s",
    "&:hover": {
      backgroundColor: backgroundColor
    }
  };
});

const SpeedQuizGenerator = (props: SpeedQuizGeneratorProps) => {
  const {
    onlyBookmarked,
    onChangeOnlyBookmarked,
    categories,
    count: quizCount,
    onChangeCount,
    onChangeQuizList,
    onChangeIsQuizPage
  } = props;

  return (
    <Container>
      <QuizBookmarkCheckConatiner>
        <BookmarkRadioButton
          type="radio"
          readOnly
          checked={onlyBookmarked}
          onClick={onChangeOnlyBookmarked}
        />
        <OnlyBookmarkText onClick={onChangeOnlyBookmarked}>
          Bookmark 문제만 풀기
        </OnlyBookmarkText>
      </QuizBookmarkCheckConatiner>
      <QuizCountSelector>
        <Typography fontWeight={600}>문제 개수 선택</Typography>
        <ButtonGroup>
          {SPEED_QUIZ_COUNT.map(count => (
            <Button
              key={count}
              selected={count === quizCount}
              onClick={() => onChangeCount(count)}
            >
              {count}
            </Button>
          ))}
        </ButtonGroup>
        <GeneratorButton
          color="#000000"
          onClick={() => {
            console.log("# count", quizCount);
            console.log("# categories", categories);
            onChangeIsQuizPage();
          }}
        >
          문제 생성
        </GeneratorButton>
      </QuizCountSelector>
      <Description>
        <Typography>* 문제 개수는 카테고리 별 n 등분됩니다.</Typography>
        <Typography>부족한 경우 다른 카테고리 개수로 채워집니다.</Typography>
      </Description>
    </Container>
  );
};

export default SpeedQuizGenerator;
