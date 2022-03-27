import React from "react";
import { TiDelete } from "react-icons/ti";
// import "./Tasks.css";

const Tasks = ({ tasks, setTasks }) => {
  const styled = {
    position: "absolute",
    left: "24rem",
    color: "red",
    fontSize: "1.7rem",
    border: "none",
    backgroundColor: "transparent",
  
  };
  const completed = {
    textDecoration: "line-through",
    color: "green",
    marginLeft: "0.5rem",
    boxShadow: "-10px 0px 0px 0px purple",
    transition: "0.5s",
  };
 
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };
  
  // console.log(tasks.length);

  return (
    
    <ul className="list-group text-start mx-4 ">
      
      {tasks.map((task) => (
        <li onDoubleClick={() => handleCompleted(task.id)}
          key={task.id}
          className="list-group-item list-group-item-action my-1 rounded-3"
          style={task.completed ? completed : null}
        >
          <div className="task-div">
            <h5 className="task-header">
              {task.task}
              
              <button className="task-button" style={styled} onClick={() => handleDelete(task.id)}>
              <TiDelete />
              </button>
            </h5>
          </div>
          <h6>
            {task.date.split("T")[0]} at {task.date.split("T")[1]} clock
          </h6>
        </li>
      ))}
    </ul>
 

  );
};

export default Tasks;
