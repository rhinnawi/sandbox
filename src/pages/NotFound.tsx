import { Link } from "react-router-dom";
// import { useState } from "react";

export default function NotFound(): JSX.Element {
  // const [secondsLeft, setSecondsLeft] = useState(15);

  const redirectMessage =
    "Please use the top menu to navigate to an existing page or go ";

  return (
    <>
      <h2>This page does not exist.</h2>
      <p>
        {redirectMessage}
        <Link to="/">Home</Link>
      </p>
    </>
  );
}
