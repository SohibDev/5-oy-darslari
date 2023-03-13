import rasm from "./logo192.png";
import "./app.scss";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  
  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
      <button onClick={decreaseCounter} className="btn btn-info p-4 mt-5 fs-5">-</button>
      <div className="fs-5 mt-5 p-3">{counter}</div>
      <button onClick={increaseCounter} className="btn btn-info p-4 mt-5 fs-5">+</button>
      </div>
    </div>
  );
}

export default App;
