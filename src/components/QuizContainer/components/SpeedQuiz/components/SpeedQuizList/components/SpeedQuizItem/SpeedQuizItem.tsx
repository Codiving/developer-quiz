import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Chip from "src/components/Chip";
import Timer from "src/components/Timer";
import Typography from "src/components/Typography";
import { prefix, SPEED_QUIZ_CATEGORY_DATA } from "../../../../common";
import { SpeedQuizData } from "../../../../quizData";

interface SpeedQuizItemProps extends SpeedQuizData {
  onChangeIndex: () => void;
  currentCount: number;
  totalCount: number;
}

const Container = styled("div", {
  label: "SpeedQuizItem"
})(() => {
  return {
    width: "50vw",
    padding: "2rem 1.5rem",
    border: "1px solid orange",
    borderRadius: 24
  };
});

const UITimer = styled(Timer, {
  label: "SpeedQuizItemTimer"
})(() => {
  return {
    marginBottom: 20
  };
});

const CategoryContainer = styled("div", {
  label: "CategoryContainer"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 14,
    marginBottom: 20
  };
});

const CategoryChip = styled(Chip, {
  label: "SpeedQuizItemCategoryChip"
})<{ color: string }>(({ color }) => {
  return {
    border: `1px solid ${color}`,
    padding: "0.3em"
  };
});

const CurrentQuizCount = styled("div", {
  label: "CurrentQuizCount"
})(() => {
  return {};
});

const QuestionContainer = styled("div", {
  label: "QuestionContainer"
})(() => {
  return {
    marginBottom: 20,
    "& *": {
      fontFamily: "SUIT-Medium"
    }
  };
});

const Question = styled(Typography, { label: "Question" })<{ index: number }>(
  ({ index }) => {
    if (!index)
      return {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        "&::before": {
          content: '"Q. "'
        }
      };
    return {
      marginBottom: 2
    };
  }
);

// beforerk wkf dksehla
const Candidate = styled(Typography, { label: "Candidate" })<{ index: number }>(
  ({ index }) => {
    const before = prefix[index];
    return {
      fontSize: 18,
      margin: "10px 0",
      "&::before": {
        // content: "`${before}`."
      }
    };
  }
);

const SpeedQuizItem = (props: SpeedQuizItemProps) => {
  const {
    id,
    type,
    question,
    contents = [],
    candidates,
    answer,
    keywords,
    messages,
    code,
    timer,
    currentCount,
    totalCount,
    onChangeIndex
  } = props;

  const { color, iconStyle, startIcon } = SPEED_QUIZ_CATEGORY_DATA[type];

  const [count, setCount] = useState(timer!);

  useEffect(() => {
    setCount(timer!);
  }, [timer]);

  return (
    <Container>
      <UITimer
        value={1000000}
        onChange={() => {
          setCount(count - 1);
          onChangeIndex();
        }}
        shakingCount={3}
      />
      <CategoryContainer>
        <CategoryChip startIcon={startIcon({ style: iconStyle })} color={color}>
          {type}
        </CategoryChip>
        <CurrentQuizCount>
          <Typography>{currentCount + 1}</Typography> /{" "}
          <Typography>{totalCount}</Typography>
        </CurrentQuizCount>
      </CategoryContainer>
      <QuestionContainer>
        {question.map((text, index) => {
          return (
            <Question component="p" key={text} index={index}>
              {text}
            </Question>
          );
        })}
      </QuestionContainer>
      <div>
        {contents.map((text, index) => {
          return (
            <Typography component="p" key={text}>
              {text}
            </Typography>
          );
        })}
      </div>
      <div>코드</div>
      <div>
        {candidates.map((text, index) => {
          return (
            <Candidate component="p" key={text} index={index}>
              {text}
            </Candidate>
          );
        })}
      </div>
      <div>제출</div>
      <button
        onClick={() => {
          onChangeIndex();
        }}
      >
        다음
      </button>
    </Container>
  );
};

export default SpeedQuizItem;
