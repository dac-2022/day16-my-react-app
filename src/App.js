function App() {
  let myref = { color: "tomato", background: "yellow" };

  return (
    <div>
      <h1 style={myref}>Hello World</h1>

      <h1 style={{ color: "red", background: "yellow" }}>
        Counter application
      </h1>
    </div>
  );
}

export default App;
