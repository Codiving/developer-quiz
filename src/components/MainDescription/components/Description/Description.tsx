import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { maxWidth } from "src/common";
import Button from "src/components/Button";
import Typography from "src/components/Typography";

interface DescriptionProps {
  title: string;
  texts: string[];
  image: string;
  isImageRight?: boolean;
  alt: string;
  buttonText?: string;
  category: string;
  selectedCagtegory: string;
  onSelectedCategory: (quizCategory: string) => void;
}

const fadeInLeft = keyframes` 
  from {
      opacity: 1;
      transform: translateZ(0);
  }
  to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }
`;

const fadeInRight = keyframes` 
from {
    opacity: 1;
    transform: translateZ(0);
}
to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
`;

const Container = styled("div", {
  label: "Description"
})<{ fade: boolean; order: number }>(({ fade, order }) => {
  return {
    animation: fade ? `${!order ? fadeInLeft : fadeInRight} 1s forwards` : ""
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

const DescriptionWrap = styled("div")<{ order: number }>(({ order }) => {
  return {
    order,
    flex: 1,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem"
  };
});

const TextWrap = styled("div", {
  label: "TextWrap"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5rem"
  };
});

const MainText = styled(Typography, {
  label: "MainText"
})(() => {
  return {
    fontSize: "2rem",
    fontWeight: "bold"
  };
});

const DescriptionTextWrap = styled("div", {
  label: "DescriptionTextWrap"
})(() => {
  return {};
});

const DescriptionText = styled(Typography, {
  label: "DescriptionText"
})(() => {
  return { marginBottom: 10, fontSize: 20, fontFamily: "Tium" };
});

const ImageWrap = styled("div")(() => {
  return {
    flex: 1
  };
});

const Image = styled("img")(() => {
  return {
    width: "100%",
    height: "100%",
    padding: "2rem",
    borderRadius: 24,
    "&:hover": {}
  };
});

const GoToButton = styled(Button, {
  label: "GoToButton"
})(() => {
  return {
    fontSize: 20,
    width: 200,
    border: "2px solid #afbbc5",
    boxShadow: "inset 0 0 0 0 #756a71",
    color: "black",
    transition: "ease-out 0.4s",
    "&:hover": {
      boxShadow: "inset 0 0 0 50px #756a71"
    }
  };
});

const Description = (props: DescriptionProps) => {
  const {
    title,
    texts,
    image,
    isImageRight = true,
    alt,
    buttonText,
    category,
    selectedCagtegory,
    onSelectedCategory
  } = props;

  const order = isImageRight ? 0 : 1;

  return (
    <Container fade={!!selectedCagtegory} order={order}>
      <Warp>
        <DescriptionWrap order={order}>
          <TextWrap>
            <MainText component="h3">{title}</MainText>
            <DescriptionTextWrap>
              {texts.map(text => (
                <DescriptionText component="p" key={text}>
                  {text}
                </DescriptionText>
              ))}
            </DescriptionTextWrap>
          </TextWrap>
          {buttonText && (
            <GoToButton
              color="#afbbc5"
              onClick={() => onSelectedCategory(category)}
            >
              {buttonText}
            </GoToButton>
          )}
        </DescriptionWrap>
        <ImageWrap>
          <Image src={image} alt={alt} />
        </ImageWrap>
      </Warp>
    </Container>
  );
};

export default Description;
