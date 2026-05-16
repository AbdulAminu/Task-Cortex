import { useState, useEffect } from "react";
import LogOutBtn from "../components/LogOutBtn";
import { api } from "../API/api";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    //eslint-disable-next-line
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const response = await api.get("/tasks/getTasks");
      setTasks(response.data.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  async function addTask() {
    if (newTask.trim() !== "") {
      try {
        const response = await api.post("/tasks/addTask", {
          task: newTask,
        });

        setTasks((prev) => [...prev, response.data.data]);
        setNewTask("");
      } catch (err) {
        console.error("Error adding task:", err);
      }
    } else {
      alert("Please enter your task");
    }
  }

  async function deleteTask(id) {
    try {
      await api.delete(`/tasks/deleteTask/${id}`);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== id)
      );
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="td-list">
      <LogOutBtn />

      <div className="cont">
        <div className="head">
          <h1 className="hb">Task Cortex</h1>
        </div>

        <div className="inp">
          <input
            type="text"
            placeholder="Enter your task"
            className="inpa"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <button className="btna" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ol className="lst">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={task._id}>
                <span className="text">{task.task}</span>

                <button
                  className="dlt"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>

                <button
                  className="mvup"
                  onClick={() => moveTaskUp(index)}
                >
                  Up
                </button>

                <button
                  className="mvud"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
              </li>
            ))
          ) : (
            <p>No tasks yet. Add one!</p>
          )}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;