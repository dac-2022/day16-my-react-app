import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  const addNewRow = () => {
    const newList = [...list, 1];
    setList(newList);
  };

  return (
    <div className="container-fluid">
      <div className="row bg-primary align-items-center">
        <div className="col text-light p-3">
          <h1>Hello World</h1>
        </div>
        <div className="col ">
          <input type="button" value="Add New Row" onClick={addNewRow} />
        </div>
      </div>

      {list.map((item, index) => (
        <div key={index} className="row">
          <div className="col alert alert-primary mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
            architecto amet tempore facilis aliquid odio alias incidunt error,
            earum, delectus ipsa itaque dolore, suscipit expedita cupiditate
            voluptatum? Laudantium, sint.
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
