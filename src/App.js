import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's The Task Title?" />
          </div>
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's The Task Title?" />
          </div>
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's The Task Title?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
