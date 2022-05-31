import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
import { MainSlider } from "src/components";
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
    </Container>
  );
};

export default Home;
