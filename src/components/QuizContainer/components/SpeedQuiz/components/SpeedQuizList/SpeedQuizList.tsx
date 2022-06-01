import styled from "@emotion/styled";
import Timer from "src/components/Timer";

const Container = styled("div", {
  label: "SpeedQuizList"
})(() => {
  return {
    backgroundColor: "#F5EEDC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});

const SpeedQuizList = () => {
  return (
    <Container>
      <div>
        <div></div>
        <div>제목</div>
        <div>코드</div>
        <div>리스트</div>
        <div>제출</div>
      </div>
    </Container>
  );
};

export default SpeedQuizList;
