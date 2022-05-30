import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
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
  const [fade, setFade] = useState(false);

  const onFade = () => {
    setFade(true);
  };

  return (
    <Container>
      <MainSlider />
      <MainDescription />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-100%",
          left: 0,
          backgroundColor: "gray"
        }}
      ></div>
    </Container>
  );
};

export default Home;
