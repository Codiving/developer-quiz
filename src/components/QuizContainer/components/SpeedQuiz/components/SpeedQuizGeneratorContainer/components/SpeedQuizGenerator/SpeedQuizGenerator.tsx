import styled from "@emotion/styled";
import Button from "src/components/Button";
import ButtonGroup from "src/components/ButtonGroup";
import {
  getQuizCountPerCategory,
  QuizCount
} from "src/components/QuizContainer/utils";
import Typography from "src/components/Typography";
import { getRandom, hexToRgbWithA, shuffle } from "src/utils";
import { SPEED_QUIZ_COUNT } from "../../../../common";
import {
  JavaScript,
  React,
  SpeedQuizData,
  TypeScript,
  Web
} from "../../../../quizData";
import { SpeedQuizGeneratorProps } from "../../../../types";

interface TotalQuizCount extends QuizCount {
  Data: SpeedQuizData[];
}

const TotalQuizCount: TotalQuizCount[] = [
  { category: "React", count: React.length, Data: React },
  { category: "TypeScript", count: TypeScript.length, Data: TypeScript },
  { category: "JavaScript", count: JavaScript.length, Data: JavaScript },
  { category: "Web", count: Web.length, Data: Web }
];

const Container = styled("div", {
  label: "SpeedQuizGenerator"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  };
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
          Bookmark ????????? ??????
        </OnlyBookmarkText>
      </QuizBookmarkCheckConatiner>
      <QuizCountSelector>
        <Typography fontWeight={600}>?????? ?????? ??????</Typography>
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
            const result: SpeedQuizData[] = [];
            onChangeIsQuizPage();

            // ?????? ????????????
            const target = TotalQuizCount.filter(quizData =>
              categories.includes(quizData.category)
            );
            // ?????? ?????? ??????
            const realQuizCount = getQuizCountPerCategory(target, quizCount);

            realQuizCount.forEach(quizData => {
              const { count, category } = quizData;

              const target = TotalQuizCount.find(
                el => el.category === category
              );

              if (!target) return;
              const { count: totalCount, Data } = target;

              const indexs = getRandom(totalCount - 1, 0, count);

              indexs.forEach(index => {
                result.push(Data[index]);
              });
            });

            onChangeQuizList(result.sort(shuffle));
          }}
        >
          ?????? ??????
        </GeneratorButton>
      </QuizCountSelector>
      <Description>
        <Typography>* ?????? ????????? ???????????? ??? n ???????????????.</Typography>
        <Typography>????????? ?????? ?????? ???????????? ????????? ???????????????.</Typography>
      </Description>
    </Container>
  );
};

export default SpeedQuizGenerator;
