import { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleAddingNumbers = (e) => {
    e.preventDefault();
    const result = parseFloat(input1) + parseFloat(input2);
    setResult(result);
  };

  return (
    <>
      <form>
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button type="submit" onClick={handleAddingNumbers}>
          Add
        </button>
      </form>
      <h1>The result is : {result} </h1>
    </>
  );
}
