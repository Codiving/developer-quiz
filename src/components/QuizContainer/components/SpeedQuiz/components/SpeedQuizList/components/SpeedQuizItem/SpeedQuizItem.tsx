import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "src/components/Button";
import Chip from "src/components/Chip";
import Timer from "src/components/Timer";
import Typography from "src/components/Typography";
import { hexToRgbWithA } from "src/utils";
import { prefix, SPEED_QUIZ_CATEGORY_DATA } from "../../../../common";
import { SpeedQuizData } from "../../../../quizData";

interface SpeedQuizItemProps extends SpeedQuizData {
  onChangeIndex: () => void;
  currentCount: number;
  totalCount: number;
}

const Container = styled("div", {
  label: "SpeedQuizItem"
})<{ code?: boolean }>(({ code }) => {
  return {
    width: code ? "" : "35vw",
    border: "1px solid #eee"
  };
});

const TimerContainer = styled("div", {
  label: "TimerContainer"
})(() => {
  return {
    width: "100%",
    padding: 10
  };
});

const UITimer = styled(Timer, {
  label: "SpeedQuizItemTimer"
})(() => {
  return {};
});

const CategoryContainer = styled("div", {
  label: "CategoryContainer"
})<{ color: string }>(({ color }) => {
  const backgroundColor = hexToRgbWithA(color, 0.1);
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 14,
    padding: 10,
    backgroundColor
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
    padding: 10,
    borderBottom: "1px solid #eee",
    "& *": {
      fontFamily: "SUIT-Medium"
    }
  };
});

const Question = styled(Typography, { label: "Question" })<{
  index: number;
  mb: boolean;
}>(({ index, mb }) => {
  if (!index)
    return {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: mb ? 10 : undefined,
      "&::before": {
        content: '"Q. "'
      }
    };
  return {
    marginBottom: 2
  };
});

const CandidateContainer = styled("div", {
  label: "CandidateContainer"
})(() => {
  return {
    // padding: 10,
    "& *": {
      fontFamily: "SUIT-Medium"
    }
  };
});

const Candidate = styled(Typography, { label: "Candidate" })<{ index: number }>(
  ({ index }) => {
    const before = prefix[index];
    return {
      padding: "10px 15px",
      cursor: "pointer",
      fontSize: 18,
      borderBottom: `1px solid #eee`,
      "&::before": {
        display: "inline-block",
        content: `"${before}. "`,
        width: 25
      },
      // #c5c4c4
      "&:hover": {
        backgroundColor: "#aaa8a8",
        color: "white"
      }
    };
  }
);

const ButtonContainer = styled("div", {
  label: "ButtonContainer"
})(() => {
  return {};
});

const NextButton = styled(Button, {
  label: "NextButton"
})(() => {
  return {
    borderRadius: 0,
    width: "100%",
    fontSize: 20,
    border: 0,
    color: "black"
  };
});

const WarningContainer = styled("div", {
  label: "WarningContainer"
})(() => {
  return {
    padding: 10
  };
});

const WarningText = styled(Typography, {
  label: "WarningText"
})(() => {
  return {
    color: "gray",
    textAlign: "center"
  };
});

const SpeedQuizItem = (props: SpeedQuizItemProps) => {
  const {
    id,
    type,
    question,
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
    <>
      <Container code={!!code}>
        <TimerContainer>
          <UITimer
            value={5555555}
            onChange={() => {
              setCount(count - 1);
              onChangeIndex();
            }}
            shakingCount={3}
          />
        </TimerContainer>
        <CategoryContainer color={color}>
          <CategoryChip
            startIcon={startIcon({ style: iconStyle })}
            color={color}
          >
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
              <Question
                component="p"
                key={text}
                index={index}
                mb={question.length > 1}
              >
                {text}
              </Question>
            );
          })}
        </QuestionContainer>
        {!!code && (
          <div style={{ overflow: "hidden", fontSize: 0 }}>
            <img src={code.src} alt={question[0]} />
          </div>
        )}
        <CandidateContainer>
          {candidates.map((text, index) => {
            return (
              <Candidate component="p" key={text} index={index}>
                {text}
              </Candidate>
            );
          })}
        </CandidateContainer>
        <ButtonContainer>
          <NextButton
            color={color}
            onClick={() => {
              onChangeIndex();
            }}
          >
            Next
          </NextButton>
        </ButtonContainer>
      </Container>

      <WarningContainer>
        <WarningText component="p">이전 문제로 돌아가지 못 합니다.</WarningText>
        <WarningText component="p">신중히 선택해주세요.</WarningText>
      </WarningContainer>
    </>
  );
};

export default SpeedQuizItem;
