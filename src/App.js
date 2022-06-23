import { useRef, useState } from "react";

function App() {
  let textRef = useRef();
  let [userList, setUserList] = useState([]);

  const clickMe = () => {
    const newValue = textRef.current.value;
    const newList = [newValue, ...userList];
    setUserList(newList);

    textRef.current.value = "";
  };

  return (
    <div>
      <h1>Hello World</h1>

      <input ref={textRef} type="text" />
      <input type="button" value="Cick Me" onClick={clickMe} />

      {userList.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
}

export default App;
