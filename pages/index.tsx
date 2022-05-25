import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
import { MainSlider, StartButton, Timer } from "src/components";

const Container = styled("div", {
  label: "Home"
})(() => {
  return {
    overflow: "hidden"
  };
});

const timers = [3, 1, 2, 4, 2];

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const onChange = () => setIndex(prev => prev + 1);

  return (
    <Container>
      <Timer value={timers[index]} onChange={onChange} shakingCount={2} />
      <MainSlider />
      <StartButton />
    </Container>
  );
};

export default Home;
