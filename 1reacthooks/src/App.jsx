import "./App.css";
import CounterUseMemo from "./components/CounterUseMemo";
import DigitalTimer from "./components/DigitalTimer";
import Preview from "./components/Preview";
import ProgressBar from "./components/ProgressBar";
import ProgressBarAutomatic from "./components/ProgressBarAutomatic";
import PropsPass from "./components/PropsPass";
import CollegesTable from "./components/colleageDuniya/CollageDuniya";
import Debounce from "./components/debounce/Debounce";
// import UseState from "./components/UseState";

function App() {

  const data = {
    name : 'vinayak',
    age : 25,
    add : {
      n : 'v',
      m : 5
    }
  }

const details = {
    n : "vinayak",
    p : "Sannaik"
  }

  const name = "Vinayak";
  const mname = "Parasappa";
  const sname = "Sannaik"

  

  return (
    <>
      {/* <p>React Hooks</p> */}
      {/* <hr /> */}
      {/* <UseState /> */}
      {/* <hr /> */}
      {/* <h2>React Interview logics</h2> */}
      {/* <hr /> */}
      {/* <DigitalTimer /> */}
      {/* <hr /> */}
      {/* <ProgressBar /> */}
      {/* <ProgressBarAutomatic /> */}
      {/* <hr /> */}
      {/* <CollegesTable /> */}
      {/* <hr /> */}
      {/* <Debounce /> */}
      {/* <hr />
      <useMemos /> */}
      {/* <CounterUseMemo /> */}
      <Preview data = {data} />
      <PropsPass name={name} mname ={mname} sname={sname} details={details}/>
    </>
  );
}

export default App;
