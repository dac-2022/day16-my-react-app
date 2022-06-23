import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let myref = {
    color: "tomato",
    background: counter == 0 ? "yellow" : "skyblue",
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <input type="button" value="Click Me!" onClick={increment} />

      <h1 style={myref}>Hello World</h1>

      <h1
        style={{ color: "red", background: counter == 0 ? "yellow" : "blue" }}
      >
        Dynamic CSS
      </h1>

      <h1 style={{ color: "red", background: "yellow" }}>
        Counter application
      </h1>
    </div>
  );
}

export default App;
