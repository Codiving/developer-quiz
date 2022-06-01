import styled from "@emotion/styled";
import Typography from "src/components/Typography";
import { IoClose } from "react-icons/io5";
import Chip from "src/components/Chip";
import { SpeedQuizCategory, SPEED_QUIZ_CATEGORY_DATA } from "../../common";

const Container = styled("div", {
  label: "SpeedQuizGenerator"
})(() => {
  return {
    backgroundColor: "#ffe579"
  };
});

const MainTitle = styled(Typography, {
  label: "MainTitle"
})(() => {
  return {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 40
  };
});

const CategoryTitle = styled(Typography, {
  label: "CategoryTitle"
})(() => {
  return {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 28,
    marginBottom: "1rem"
  };
});

const CategorySubtitle = styled(Typography, {
  label: "CategorySubtitle"
})(() => {
  return {
    textAlign: "center",
    color: "#747474"
  };
});

const SpeedQuizGenerator = () => {
  return (
    <Container>
      <MainTitle component="h2">Speed Quiz</MainTitle>
      <div style={{ marginTop: "2rem" }}>
        <CategoryTitle component="h3">Quiz Categories</CategoryTitle>
        <CategorySubtitle component="p">
          Quiz 풀고 싶은 카테고리를 선택하세요. (중복 가능)
        </CategorySubtitle>
      </div>
      <div>
        {Object.entries(SPEED_QUIZ_CATEGORY_DATA).map(item => {
          const [key, { color, iconStyle, startIcon }] = item;
          const category = key as SpeedQuizCategory;
          return (
            <Chip
              key={category}
              startIcon={startIcon({ style: iconStyle })}
              color={color}
              onClick={() => {}}
            >
              {category}
            </Chip>
          );
        })}
      </div>
    </Container>
  );
};

export default SpeedQuizGenerator;
