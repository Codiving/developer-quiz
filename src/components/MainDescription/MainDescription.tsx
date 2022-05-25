import styled from "@emotion/styled";
import { maxWidth } from "src/common";
import Typography from "../Typography";

interface MainDescriptionProps {
  texts: string[];
  image: string;
  isImageRight?: boolean;
}

const Container = styled("div", {
  label: "MainDescription"
})(() => {
  return {
    margin: "3rem 0"
  };
});

const Warp = styled("div", {
  label: "MainDescriptionWrap"
})(() => {
  return {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: maxWidth,
    width: "90%",
    margin: "0 auto"
  };
});

const TextWrap = styled("div")<{ order: number }>(({ order }) => {
  return {
    order,
    flex: 1
  };
});

const ImageWrap = styled("div")(() => {
  return {
    // width: "40%",
    flex: 1
  };
});

const Image = styled("div")<{ image: string }>(({ image }) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  };
});

const MainDescription = (props: MainDescriptionProps) => {
  const { texts, image, isImageRight = true } = props;

  const order = isImageRight ? 0 : 1;

  return (
    <Container>
      <Warp>
        <TextWrap order={order}>
          {texts.map(text => (
            <Typography component="p" key={text}>
              {text}
            </Typography>
          ))}
        </TextWrap>
        <ImageWrap>
          <Image image={image} />
        </ImageWrap>
      </Warp>
    </Container>
  );
};

export default MainDescription;
