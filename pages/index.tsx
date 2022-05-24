import styled from "@emotion/styled";
import type { NextPage } from "next";
import { MainSlider, StartButton } from "src/components";

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
      <StartButton />
    </Container>
  );
};

export default Home;
