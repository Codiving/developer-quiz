import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
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
  children: React.ReactNode;
  onCloseAfter: () => void;
  onCloseBefore: () => void;
}

const Container = styled("section", {
  label: "QuizContainer"
})<{ unmount: boolean }>(({ unmount }) => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "gray",
    animation: `${unmount ? bottomToUp : topToBottom} 0.5s`
  };
});

const CloseIcon = styled(IoClose, {
  label: "QuizContainerCloseIcon"
})(() => {
  return {
    position: "fixed",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    cursor: "pointer",
    transition: "transform .2s",
    zIndex: 2,
    "&:hover": {
      transform: "scale(1.3) rotate(360deg)"
    }
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
    <Container unmount={unmount}>
      <CloseIcon onClick={onClick} />
      {children}
    </Container>,
    body
  );
};

export default QuizContainer;
