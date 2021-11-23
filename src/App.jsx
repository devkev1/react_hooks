import { useState } from "react";
import Overview from "./components/Overview";
import "./App.css";

function App () {
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    const input = document.getElementById("task").value;

    const updateTasks = tasks.concat({
      content: input,
      complete: false,
    });
    setTasks(updateTasks);
  };

  return (
    <main
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    }}
  >
    <section>
      <h3>Tasks</h3>
      <input 
        type="text" 
        id="task" 
        placeholder="Task"
      />
      <button onClick={handleClick}>Submit</button>
    </section>
      <Overview tasks={tasks} />
  </main>

  )
}

export default App;
