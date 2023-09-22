import Options from "./Options";
import { useQuizz } from "./context/QuizzProvider";
function Questions() {
  const { question } = useQuizz();
  return (
    <div className="t">
      <h4>{question.question}</h4>
      <Options
      // question={question}
      // dispatch={dispatch}
      // useranswer={useranswer}
      />
    </div>
  );
}

export default Questions;
