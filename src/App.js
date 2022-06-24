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

      <div className="row">
        {userList.map((item, index) => (
          <div
            className={
              index % 2 == 0
                ? "col-6 alert alert-danger"
                : "col-6 alert alert-dark"
            }
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <hr />

      <div className="row">
        {userList.map((item, index) => (
          <div className="col-6 alert alert-danger" key={index}>
            {item}
          </div>
        ))}
      </div>

      <hr />
      <div className="row">
        {userList.map((item, index) => (
          <div
            className={
              index % 2 == 0
                ? "col-6 alert alert-primary"
                : "col-6 alert alert-info"
            }
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <hr />
      <div className="row">
        {userList.map((item, index) => (
          <div className="col-6  my-1" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
