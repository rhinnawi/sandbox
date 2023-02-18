import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// TODO: create timer for countdown function using import { setInterval } from "timers/promises";

type CountdownProps = {
  startingSeconds: number;
};

const Countdown: FunctionComponent<CountdownProps> = ({
  startingSeconds,
}: CountdownProps) => {
  const [secondsLeft, setSecondsLeft] = useState(startingSeconds);
  const navigator = useNavigate();

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(
        () => setSecondsLeft((secondsLeft) => secondsLeft - 1),
        1000
      );

      return () => clearTimeout(timer);
    } else {
      navigator("/");
    }
  }, [navigator, secondsLeft]);

  return <p>Redirecting Home in {secondsLeft} seconds...</p>;
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
