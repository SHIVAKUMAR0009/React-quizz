import { useQuizz } from "./context/QuizzProvider";

function Progress() {
  const { numquestions, index, useranswer, points, maxpossiblepoints } =
    useQuizz();
  return (
    <div>
      <header className="progress">
        <progress
          max={numquestions}
          value={index + Number(useranswer != null)}
        />
        <p>
          questions
          <strong>
            {index + 1}/{numquestions}
          </strong>
        </p>
        <p>
          points{" "}
          <strong>
            {points}/{maxpossiblepoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
