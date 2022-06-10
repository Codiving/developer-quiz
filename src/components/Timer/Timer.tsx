import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import useInterval from "src/hooks/useInterval";
import { keyframes } from "@emotion/react";
import Typography from "../Typography";

interface TimerProps {
  id: string;
  className?: string;
  value: number;
  onChange: () => void;
  interval?: number;
  shakingCount?: number;
  onTrigger?: () => void;
}

const shaking = keyframes`
  from {
    transform: translate(1px, 1px) rotate(1deg)
  }

  15% {
    transform: translate(-1px, -1px) rotate(2deg)
  }

  30% {
    transform: translate(-1px, -1.5px) rotate(-2deg)
  }

  45% {
    transform: translate(1px, 1.5px) rotate(0deg)
  } 

  60% {
    transform: translate(-1px, -2px) rotate(-2deg)
  } 

  75% {
    transform: translate(-1px, -1px) rotate(-1deg)
  }

  90% {
    transform: translate(1px, 1.5px) rotate(2deg)
  }

  to {
    transform: translate(-1px, -1.5px) rotate(0deg)
  }
`;

const Container = styled("div", {
  label: "Timer"
})<{ shakingCount: number; count: number }>(({ shakingCount, count }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: 10,
    animation: !!shakingCount
      ? count <= shakingCount
        ? `${shaking} 0.5s infinite`
        : ""
      : "",
    width: "fit-content"
  };
});

const Timer = (props: TimerProps) => {
  const {
    id,
    className,
    value,
    onChange,
    interval = 1000,
    shakingCount = 0,
    onTrigger
  } = props;

  const [count, setCount] = useState(value);

  const onChangeCount = () => {
    const nextCount = count - 1;

    if (onTrigger && nextCount === shakingCount) {
      onTrigger();
    }

    if (nextCount) setCount(nextCount);
    else {
      setCount(nextCount);
      setTimeout(onChange, interval);
    }
  };

  useInterval(onChangeCount, interval);

  useEffect(() => {
    setCount(value);
  }, [value, id]);

  return (
    <Container className={className} shakingCount={shakingCount} count={count}>
      <RiTimerFlashLine style={{ width: 30, height: 30 }} />
      <Typography fontSize={18}>{count}</Typography>
    </Container>
  );
};

export default Timer;
