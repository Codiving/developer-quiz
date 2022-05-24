import styled from "@emotion/styled";
import { RiTimerFlashLine } from "react-icons/ri";
import useInterval from "src/hooks/useInterval";
import { Typography } from "..";

interface TimerProps {
  value: number;
  onChange: () => void;
  interval?: number;
}

const Container = styled("div", {
  label: "Timer"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    gap: 10
  };
});

const Timer = (props: TimerProps) => {
  const { value, onChange, interval = 1000 } = props;

  useInterval(onChange, interval);

  return (
    <Container>
      <RiTimerFlashLine style={{ width: 30, height: 30 }} />
      <Typography fontSize={18}>{value}</Typography>
    </Container>
  );
};

export default Timer;
