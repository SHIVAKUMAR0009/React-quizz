import { useQuizz } from "./context/QuizzProvider";

function StarterScreen() {
  const { numquestions, dispatch } = useQuizz();
  return (
    <div className="start">
      <h2>Welcome to React Quizz</h2>
      <h3>{numquestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StarterScreen;
