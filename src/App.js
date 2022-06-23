import { useState } from "react";

function App() {
  const [counter] = useState(10);

  return (
    <div>
      <h1>Counter application</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export { App };
