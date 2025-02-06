import React, { useState, useEffect } from "react";
import "./Rightsection.scss";
import Image from "../../../assets/Rectangle.png";
import Texts from "../Texts/Texts";
import Bin from "../../../assets/Bin.png";

const Rightsection = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const today = new Date();
  const weekday = today.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = today.getDate();
  let hours = today.getHours();
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      title: inputValue,
      time: `Today at ${hours}:${minutes} ${ampm}`,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="Right">
      <div className="img-text">
        <img className="img" src={Image} alt="Image" />
        <Texts />
      </div>

      <div className="label">
        <input
          className="note"
          type="text"
          placeholder="Note"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={addTask}>+</button>
      </div>

      <div className="todo-list">
        {tasks.map((task, index) => (
          <div className={`task-item ${task.completed ? "completed" : ""}`} key={index}>
            <div className="task-info">
              <h4 className="task-title">{task.title}</h4>
              <span className="task-time">{task.time}</span>
            </div>
            <div className="task-actions">
              <label className="check">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span></span>
              </label>
              <img src={Bin} alt="Delete" onClick={() => deleteTask(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightsection;
