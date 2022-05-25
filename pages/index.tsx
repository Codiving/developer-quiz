import styled from "@emotion/styled";
import type { NextPage } from "next";
import { MainSlider, StartButton } from "src/components";
import MainDescription from "src/components/MainDescription";

const Container = styled("div", {
  label: "Home"
})(() => {
  return {
    overflow: "hidden"
  };
});

const Home: NextPage = () => {
  return (
    <Container>
      <MainSlider />
      {/* <StartButton /> */}
      <MainDescription
        texts={[
          "내가 어떠한 개념을 모르는 지",
          "빠르게 스피드 객관식 퀴즈로",
          "확인해볼 수 있습니다."
        ]}
        image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/05/6284ca3a3785e878211698.jpg"
      />
      <MainDescription
        texts={[
          "취업 면접 시 나올만한 질문들을 모았습니다.",
          "모르는 내용인 경우 추천 키워드를 통해 공부합시다."
        ]}
        image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/05/6284ca3a3785e878211698.jpg"
        isImageRight={false}
      />
      {/* <MainDescription
        texts={["1111", "2222", "3333"]}
        image="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/05/6284ca3a3785e878211698.jpg"
      /> */}
    </Container>
  );
};

export default Home;
