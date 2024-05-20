import React from "react";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (event) => {
    setNumber(event.target.value);
  };

  const addNumber = () => {
    setResult(result + Number(number));
    setNumber("");
  };

  const minusNumber = () => {
    setResult(result - Number(number));
    setNumber("");
  };

  const resetResult = () => {
    setResult(0);
    setNumber("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" onChange={handleInput} value={number}></input>{" "}
        만큼을 <button onClick={addNumber}>더할게요</button>{" "}
        <button onClick={minusNumber}>뺄게요</button>
        <button onClick={resetResult}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
