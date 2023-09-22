import "./index.css";
import "./App.css";
// import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StarterScreen from "./StarterScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizz } from "./context/QuizzProvider";

export default function App() {
  // const { questions, status } = state;
  // // console.log(state);cl

  const { status, dispatch } = useQuizz();
  // console.log(points);

  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "datareceived", payload: data }))
      .catch((error) => dispatch({ type: "data-failed" }));
  }, []);

  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StarterScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen

          // numquestions={numquestions}
          />
        )}
      </Main>
    </div>
  );
}
