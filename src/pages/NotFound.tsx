import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// TODO: create timer for countdown function using import { setInterval } from "timers/promises";

type CountdownProps = {
  startingSeconds: number;
};

const Countdown: FunctionComponent<CountdownProps> = ({
  startingSeconds,
}: CountdownProps) => {
  return <p>Redirecting in {startingSeconds} seconds</p>;
};

export default function NotFound(): JSX.Element {
  const startTime = 10;

  const redirectMessage =
    "Please use the top menu to navigate to an existing page or go ";

  return (
    <>
      <h2>This page does not exist.</h2>
      <p>
        {redirectMessage}
        <Link to="/">Home.</Link>
      </p>
      <Countdown startingSeconds={startTime} />
    </>
  );
}
