import { useState } from "react";

const ShoppingList = () => {
  const newTask = (text) => {
    return {
      title: text,
      completed: false,
    };
  };

  const [tasks, setTasks] = useState([newTask("sewing")]);
  const [userInput, setUserInput] = useState("");
  //function to store the input box value in State
  const updateValue = (event) => {
    setUserInput(event.target.value);
  };

  const addItem = (event) => {
    let t = newTask(userInput);
    let newArray = [...tasks];
    newArray.push(t);

    setTasks(newArray);
    setUserInput("");
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input value={userInput} onChange={updateValue} />
        <button onClick={addItem}>add an item</button>
      </form>
      <h1>To Do:</h1>
      <ul>
        <div className="listLine">
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </div>
      </ul>
    </div>
  );
};

const Task = (props) => {
  const [task, setTask] = useState(props.task);

  const markCompleted = () => {
    task.completed = true;
    setTask(task);
  };

  const deleted = () => {};

  return (
    <div>
      <li style={{ color: task.completed ? "red" : "blue" }}>{task.title}</li>
      <button onClick={deleted}>Delete</button>
      <button onClick={markCompleted}>Mark as done</button>
    </div>
  );
};

export default ShoppingList;
