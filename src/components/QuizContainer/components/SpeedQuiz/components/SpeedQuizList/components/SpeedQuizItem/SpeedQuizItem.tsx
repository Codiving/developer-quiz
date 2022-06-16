import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useMemo, useState } from "react";
import Button from "src/components/Button";
import Chip from "src/components/Chip";
import Timer from "src/components/Timer";
import Typography from "src/components/Typography";
import { hexToRgbWithA } from "src/utils";
import { prefix, SPEED_QUIZ_CATEGORY_DATA } from "../../../../common";
import { SpeedQuizItemProps } from "../../../../types";

const centerToTopToBottom = keyframes`
  from {
    transform: translate3d(0 ,0 ,0);
    opacity: 1;
  }

  25% {
    transform: translate3d(0 ,-15px ,0);
  }

  to {
    opacity: 0;
    transform: translate3d(0 ,100px ,0);
  }
`;

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
    padding: "12px 10px",
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
    padding: "15px 10px",
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

const CandidateWrap = styled("div", {
  label: "CandidateWrap"
})<{ selected: boolean; $hidden: boolean }>(({ selected, $hidden }) => {
  return {
    color: selected ? "white" : undefined,
    borderBottom: `1px solid #eee`,
    backgroundColor: selected ? "#797676" : undefined,
    cursor: $hidden ? "not-allowed" : undefined,
    // #c5c4c4
    "&:hover": {
      backgroundColor: "#aaa8a8",
      color: "white"
    }
  };
});

const Candidate = styled(Typography, { label: "Candidate" })<{
  index: number;
  hidden: boolean;
}>(({ index, hidden }) => {
  const before = prefix[index];
  const animation = !hidden ? undefined : `${centerToTopToBottom} 1s forwards`;
  return {
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: 18,
    animation,
    pointerEvents: hidden ? "none" : undefined,
    "&::before": {
      display: "inline-block",
      content: `"${before}. "`,
      width: 25
    }
  };
});

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

const getChanceIndex = (candidates: string[], answer: string): number => {
  const list: number[] = [];
  candidates.forEach((el, index) => {
    if (el === answer) return;
    list.push(index);
  });

  const result = Math.floor(Math.random() * list.length);
  return list[result];
};

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
    onChangeIndex,
    answers,
    onChangeAnswers
  } = props;

  const { color, iconStyle, startIcon } = SPEED_QUIZ_CATEGORY_DATA[type];

  const [tempAnswer, setTempAnswer] = useState("");
  const [chance, setChance] = useState(false);

  const onChangeTempAnswer = (answer: string) => () => {
    setTempAnswer(answer);
  };

  const onTrigger = () => {
    if (candidates.length <= 2) return;
    setChance(true);
  };

  const chanceIndex = useMemo(
    () => getChanceIndex(candidates, answer),
    [answer, candidates]
  );

  const onNextQuiz = useCallback(() => {
    setChance(false);
    onChangeIndex();
    setTempAnswer("");
    onChangeAnswers("");
  }, [onChangeAnswers, onChangeIndex]);

  const onClickNextButton = () => {
    if (!tempAnswer) return alert("정답을 입력해주세요.");

    onChangeAnswers(tempAnswer);
    setChance(false);
    onChangeIndex();
    setTempAnswer("");
  };

  return (
    <>
      <Container code={!!code}>
        <TimerContainer>
          <UITimer
            id={id}
            value={timer}
            onChange={onNextQuiz}
            shakingCount={3}
            onTrigger={onTrigger}
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
            const hidden = chance && chanceIndex === index;

            return (
              <CandidateWrap
                key={text}
                selected={text === tempAnswer}
                onClick={onChangeTempAnswer(text)}
                $hidden={hidden}
              >
                <Candidate component="p" index={index} hidden={hidden}>
                  {text}
                </Candidate>
              </CandidateWrap>
            );
          })}
        </CandidateContainer>
        <ButtonContainer>
          <NextButton color={color} onClick={onClickNextButton}>
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
