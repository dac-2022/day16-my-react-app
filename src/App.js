import { useRef, useState } from "react";

function App() {
  let textRef = useRef();
  let [username, setUsername] = useState("hello");

  const clickMe = () => {
    // document.querySelector("#id1") == textRef.current
    // alert(textRef.current.value);

    console.log(textRef);

    setUsername(username + " " + textRef.current.value);
    textRef.current.value = "";
  };

  return (
    <div>
      <h1>Hello World</h1>

      <input ref={textRef} type="text" />
      <input type="button" value="Cick Me" onClick={clickMe} />

      <h1>{username}</h1>
    </div>
  );
}

export default App;
