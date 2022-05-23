import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import useInterval from "src/hooks/useInterval";

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
    transition: index !== 1 ? "transform 0.5s ease-out" : ""
  };
});

const Slider = styled("div", {
  label: "Slider"
})(() => {
  return {
    width: "100vw"
  };
});

const MainSlider = () => {
  const [index, setIndex] = useState(2);

  const onAddIndex = useCallback(() => setIndex(prev => prev + 1), []);

  useInterval(onAddIndex, 1000);

  useEffect(() => {
    if (index === 5)
      setTimeout(() => {
        setIndex(1);
      }, 500);
  }, [index]);

  const onClick = () => {
    setIndex(prev => prev + 1);
  };

  console.log("# index", index);

  return (
    <Container>
      <RootSlider index={index} onClick={onClick}>
        <Slider style={{ backgroundColor: "green" }}>가나다 1</Slider>
        <Slider style={{ backgroundColor: "blue" }}>마바사 6</Slider>
        <Slider style={{ backgroundColor: "green" }}>가나다 3</Slider>
        <Slider style={{ backgroundColor: "blue" }}>마바사 4</Slider>
        <Slider style={{ backgroundColor: "green" }}>가나다 5</Slider>
        <Slider style={{ backgroundColor: "blue" }}>마바사 6</Slider>
      </RootSlider>
    </Container>
  );
};

export default MainSlider;
