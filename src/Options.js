import { useQuizz } from "./context/QuizzProvider";

function Options() {
  //   console.log(question.correctOption);
  const { question, dispatch, useranswer } = useQuizz();
  const hasanswered = useranswer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === useranswer ? "answer" : ""} ${
            hasanswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }    `}
          key={option}
          onClick={() => dispatch({ type: "select", payload: index })}
          disabled={hasanswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
