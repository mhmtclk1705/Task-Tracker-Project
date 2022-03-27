import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import "./App.css"


function App() {
  
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [taskInput, setTaskInput] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container text-center my-5 bg-danger bg-gradient rounded-3">
      <Header
        tasks={tasks}
        date={date}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        setTasks={setTasks}
        setDate={setDate}
      />
      
        <Tasks 
        tasks={tasks} 
        setTasks={setTasks} />
      
    </div>
  );
}

export default App;
