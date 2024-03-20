import "./App.css";
import DigitalTimer from "./components/DigitalTimer";
import ProgressBar from "./components/ProgressBar";
import ProgressBarAutomatic from "./components/ProgressBarAutomatic";
// import UseState from "./components/UseState";

function App() {
  return (
    <>
      {/* <p>React Hooks</p> */}
      {/* <hr /> */}
      {/* <UseState /> */}
      {/* <hr /> */}
      <h2>React Interview logics</h2>
      <hr />
      <DigitalTimer />
      <hr />
      <ProgressBar />
      <ProgressBarAutomatic />

    </>
  );
}

export default App;