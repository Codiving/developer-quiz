import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import Quiz from "../Quiz";
import { Description } from "./components";

const Container = styled("section", {
  label: "MainDescription"
})(() => {
  return {
    margin: "5rem 0"
  };
});

const MainDescription = () => {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const onFade = useCallback(() => setFade(prev => !prev), []);

  const onFalseFade = useCallback(() => setFade(false), []);

  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!fade) return;

    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, [fade]);

  return (
    <>
      {open && <Quiz onCloseBefore={onFalseFade} onCloseAfter={onClose} />}
      <Container>
        <Description
          title="스피드 객관식 퀴즈 !"
          texts={[
            "내가 어떠한 개념을 모르고 있는 지 궁금한 경우가 있습니다.",
            "테스트 하고 싶은 카테고리만 골라 객관식 문제를 풀어봅시다."
          ]}
          image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/05/6284ca3a3785e878211698.jpg"
          alt="이미지"
          buttonText="퀴즈 풀어보기"
          fade={fade}
          onFade={onFade}
        />
        <Description
          title="가상 면접"
          texts={[
            "취업 면접 시 나올만한 질문들을 모았습니다.",
            "모르는 내용인 경우 추천 키워드를 통해 공부합시다."
          ]}
          image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/05/6284ca3a3785e878211698.jpg"
          alt="이미지"
          isImageRight={false}
          buttonText="가상 면접보기"
          fade={fade}
          onFade={onFade}
        />
      </Container>
    </>
  );
};

export default MainDescription;
