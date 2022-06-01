import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const topToBottom = keyframes` 
  from {
      opacity: 1;
      transform: translate3d(0, -100%, 0);
  }
  to {
      transform: translate3d(0, 0, 0);
  }
`;

const bottomToUp = keyframes` 
  from {
      opacity: 1;
      transform: translate3d(0, 0%, 0);
  }
  to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
  }
`;

interface QuizContainerProps {
  children: React.ReactElement;
  onCloseAfter: () => void;
  onCloseBefore: () => void;
}

const Container = styled("div")<{ unmount: boolean }>(({ unmount }) => {
  return {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "gray",
    animation: `${unmount ? bottomToUp : topToBottom} 0.5s`
  };
});

const QuizContainer = (props: QuizContainerProps) => {
  const { children, onCloseAfter, onCloseBefore } = props;
  const [unmount, setUnmount] = useState(false);

  const body = document.querySelector("body");
  const nextId = document.querySelector("#__next");

  const onClick = useCallback(() => {
    setUnmount(true);
    onCloseBefore();
    setTimeout(onCloseAfter, 500);
  }, [onCloseAfter, onCloseBefore]);

  useEffect(() => {
    if (!body) return;
    if (!nextId) return;

    setTimeout(() => nextId.classList.add("fixed-height"), 0);

    return () => {
      nextId.classList.remove("fixed-height");
    };
  }, [body, nextId]);

  if (!body) return <>Bug</>;

  return createPortal(
    <Container unmount={unmount} onClick={onClick}>
      {children}
    </Container>,
    body
  );
};

export default QuizContainer;
