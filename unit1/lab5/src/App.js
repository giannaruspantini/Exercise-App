import './App.css';
import { useCallback, useState } from 'react';
import DurationExercise from './DurationExercise';

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";

function RepetitionExercise({ exercise, setMenuScreen }) {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const incrementWeight = () => {
    setWeight(weight + 1);
  };

  const resetWeight = () => {
    setWeight(0);
  };

  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button style={{ fontSize: "2em" }} onClick={incrementCount}>Increment</button>
      <button style={{ fontSize: "2em" }} onClick={resetCount}>Reset</button><br />
      <p>Weight: {weight} lbs</p>
      <button style={{ fontSize: "2em" }} onClick={incrementWeight}>Add Weight</button>
      <button style={{ fontSize: "2em" }} onClick={resetWeight}>Remove Weight</button><br />
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>Return to Menu</button>
    </div>
  );
}

function PlanksExercise({ exercise, setMenuScreen }) {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const incrementWeight = () => {
    setWeight(weight + 1);
  };

  const resetWeight = () => {
    setWeight(0);
  };

  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button style={{ fontSize: "2em" }} onClick={incrementCount}>Increment</button>
      <button style={{ fontSize: "2em" }} onClick={resetCount}>Reset</button><br />
      <p>Weight: {weight} lbs</p>
      <button style={{ fontSize: "2em" }} onClick={incrementWeight}>Add Weight</button>
      <button style={{ fontSize: "2em" }} onClick={resetWeight}>Remove Weight</button><br />
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>Return to Menu</button>
    </div>
  );
}

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
  { type: REPETITION_EXERCISE, name: "Planks" }
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState("");

  let screenComponent = undefined;

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        if (currentExercise.name === "Planks") {
          screenComponent = (
            <PlanksExercise
              exercise={currentExercise}
              setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            />
          );
        } else {
          screenComponent = (
            <RepetitionExercise
              exercise={currentExercise}
              setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            />
          );
        }
        break;
      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">{screenComponent}</header>
    </div>
  );
}

export default App;
