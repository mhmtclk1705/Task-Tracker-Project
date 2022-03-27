import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "./Tasks";

const AddTask = ({tasks,setTasks,date,setDate,taskInput,setTaskInput}) => {

  const handleTaskForm = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: uuidv4(), task: taskInput, date: date }]);
    setTaskInput("");
    setDate("");
  };
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleDateInput = (e) => {
    setDate(e.target.value);
  };
  console.log(tasks);
  return (
    <div>
      <form
        className="container d-flex flex-column px-5 header-form"
        onSubmit={handleTaskForm}
      >
        <label className="text-start mt-3 mb-2" >
          Task
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="AddTask"
          value={taskInput}
          onChange={handleTaskInput}
          required
        />
        <label className="text-start mt-3 mb-2" htmlFor="date">
          Day & Time
        </label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          placeholder="Add Day & Time"
          value={date}
          onChange={handleDateInput}
          required
        />
        <button className="btn btn-danger my-4">Save Task</button>

        
      </form>

      {/* <Tasks /> */}
    </div>
  );
};

export default AddTask;
