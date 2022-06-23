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
      <h1 className="bg-primary p-3 text-light">Hello World</h1>

      <input
        className="form-control form-control-lg"
        ref={textRef}
        type="text"
      />
      <input
        className="btn btn-lg btn-primary w-100 my-1"
        type="button"
        value="Cick Me"
        onClick={clickMe}
      />

      {userList.map((item, index) => (
        <h1 className="alert alert-primary" key={index}>
          {item}
        </h1>
      ))}
    </div>
  );
}

export default App;
