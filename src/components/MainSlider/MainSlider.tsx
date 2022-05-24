import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import useInterval from "src/hooks/useInterval";
import Typography from "../Typography";

const sliderCount = 2;

const Container = styled("div", {
  label: "MainSlider"
})(() => {
  return {
    overflow: "hidden"
  };
});

const RootSlider = styled("div", {
  label: "RootSlider"
})<{ index: number }>(({ index }) => {
  return {
    width: "600vw",
    display: "flex",
    transform: `translate(-${index * 100}vw)`,
    transition: index !== sliderCount - 2 ? "transform 0.5s ease-out" : ""
  };
});

const Slider = styled("div", {
  label: "Slider"
})(() => {
  return {
    width: "100vw",
    padding: "5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em"
  };
});

const MainSlider = () => {
  const [index, setIndex] = useState(sliderCount - 2);

  const onAddIndex = useCallback(() => setIndex(prev => prev + 1), []);

  useInterval(onAddIndex, 5000);

  useEffect(() => {
    if (index === sliderCount)
      setTimeout(() => {
        setIndex(0);
      }, 500);
  }, [index]);

  return (
    <Container>
      <RootSlider index={index}>
        <Slider
          style={{
            backgroundColor: "#e0e0ee"
          }}
        >
          <Typography component="p">
            내가 알고 있는{" "}
            <Typography fontWeight={600} fontSize={32}>
              개념
            </Typography>
            이 맞는 지 궁금하신가요?
          </Typography>
          <Typography component="p">
            <Typography fontWeight={600} fontSize={32}>
              스피드 객관식 Quiz
            </Typography>
            를 통해 확인해보세요.
          </Typography>
        </Slider>
        <Slider style={{ backgroundColor: "#ffe579" }}>
          <Typography component="p">
            <Typography fontWeight={600} fontSize={32}>
              면접 준비
            </Typography>
            를 하고 계신가요?
          </Typography>
          <Typography component="p">
            <Typography fontWeight={600} fontSize={32}>
              예상 면접 질문
            </Typography>
            으로{" "}
            <Typography fontWeight={600} fontSize={32}>
              가상 면접
            </Typography>
            을 진행해보세요.
          </Typography>
        </Slider>
        <Slider style={{ backgroundColor: "#e0e0ee" }}>
          <Typography component="p">
            내가 알고 있는{" "}
            <Typography fontWeight={600} fontSize={32}>
              개념
            </Typography>
            이 맞는 지 궁금하신가요?
          </Typography>
          <Typography component="p">
            <Typography fontWeight={600} fontSize={32}>
              스피드 객관식 Quiz
            </Typography>
            를 통해 확인해보세요.
          </Typography>
        </Slider>
      </RootSlider>
    </Container>
  );
};

export default MainSlider;
