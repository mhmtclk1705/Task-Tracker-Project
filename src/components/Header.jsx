import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./AddTask";
const Header = ({tasks,setTasks,date,setDate,taskInput,setTaskInput}) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="p-3">
      <h2>Task Tracker</h2>
      <Button
        className="btn btn-danger my-2"
        onClick={() => setShowAddTask(!showAddTask)}
      >
        {showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
      </Button>

      
      {showAddTask && (<div> <AddTask 
     tasks={tasks}
     date={date}
     taskInput={taskInput}
     setTaskInput={setTaskInput}
     setTasks={setTasks}
     setDate={setDate}
      /> </div>)}

{tasks.length < 1 && ( <h5>No Tasks to Show</h5>) }
      
    </div>
  );
};

export default Header;
