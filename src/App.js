import { useEffect, useState } from "react";

function App() {
  // You have to use Date Object.
  let [hour, setHour] = useState(2);
  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(52);

  // Constructor ::
  useEffect(() => {
    let clock1 = setInterval(() => {
      if (second == 60) {
        setMinute(minute + 1);
        setSecond(0);
      } else {
        setSecond((prevValue) => prevValue + 1);
      }
    }, 1000);

    return () => clearInterval(clock1);
  }, [second, minute]);

  return (
    <div>
      <h1>Clock App</h1>
      <h1>
        {hour}: {minute} : {second}
      </h1>
    </div>
  );
}

export default App;
