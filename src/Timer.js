import { useEffect } from "react";
import { useQuizz } from "./context/QuizzProvider";

function Timer() {
  const { timeleft, dispatch } = useQuizz();
  const mins = Math.floor(timeleft / 60);
  const secs = timeleft % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
