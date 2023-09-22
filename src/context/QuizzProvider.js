import { createContext, useContext, useReducer } from "react";

const Quizz = createContext();
const secondsperquestion = 30;
const initialstate = {
  questions: [],
  status: "loading",
  index: 0,
  useranswer: null,
  points: 0,
  HighScore: 0,
  timeleft: null,
};
function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "datareceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "data-failed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        timeleft: state.questions.length * secondsperquestion,
      };

    case "select":
      const question = state.questions[state.index];
      return {
        ...state,
        useranswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextquestion":
      return {
        ...state,
        index: state.index + 1,
        useranswer: (state.useranswer = null),
      };
    case "done":
      return {
        ...state,
        status: "finished",
        HighScore:
          state.points > state.HighScore ? state.points : state.HighScore,
      };
    case "tick":
      return {
        ...state,
        timeleft: state.timeleft - 1,
        status: state.timeleft === 0 ? "finished" : state.status,
      };
    case "restart":
      return {
        ...state,
        status: (state.status = "ready"),
        useranswer: null,
        index: 0,
        points: 0,
        timeleft: null,
      };

    default:
      return initialstate;
  }
}
function QuizzProvider({ children }) {
  const [
    { questions, status, index, useranswer, points, HighScore, timeleft },
    dispatch,
  ] = useReducer(reducer, initialstate);
  const question = questions[index];
  const numquestions = questions.length;
  //   console.log(numquestions);
  // console.log(index);
  const maxpossiblepoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <Quizz.Provider
      value={{
        questions,
        status,
        index,
        useranswer,
        points,
        HighScore,
        timeleft,
        dispatch,
        numquestions,
        maxpossiblepoints,
        question,
      }}
    >
      {children}
    </Quizz.Provider>
  );
}

function useQuizz() {
  const context = useContext(Quizz);
  // console.log(context);
  if (context === undefined) throw new Error("used outside the context");
  return context;
}

export { QuizzProvider, useQuizz };
