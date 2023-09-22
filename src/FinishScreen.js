import { useQuizz } from "./context/QuizzProvider";

function FinishScreen() {
  const {
    points,

    maxpossiblepoints,
    HighScore,
    dispatch,
  } = useQuizz();
  const totalpercentage = Math.ceil((points / maxpossiblepoints) * 100);
  let emoji;
  if (totalpercentage === 100) emoji = "💪";
  if (totalpercentage >= 80 && totalpercentage < 100) emoji = "👌";
  if (totalpercentage >= 50 && totalpercentage < 80) emoji = "🤞";
  if (totalpercentage >= 0 && totalpercentage < 50) emoji = "👏";
  if (totalpercentage === 0) emoji = "🙏";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxpossiblepoints} totalpercentage : {totalpercentage} %
      </p>
      <p style={{ fontSize: "30px" }}>Highscore:{HighScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quizz
      </button>
    </>
  );
}

export default FinishScreen;
