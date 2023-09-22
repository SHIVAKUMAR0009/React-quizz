import { useQuizz } from "./context/QuizzProvider";

function NextButton() {
  const { dispatch, useranswer, numquestions, index } = useQuizz();
  if (useranswer == null) return;

  if (index < numquestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextquestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numquestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "done" })}
        >
          finished
        </button>
      </div>
    );
}

export default NextButton;
