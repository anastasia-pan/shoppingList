import { useState } from "react";

const newTask = (text) => {
  return {
    title: text,
    completed: false,
  };
};

const ShoppingList = () => {
  //states set for an array of Tasks, to be modified by user input
  const [tasks, setTasks] = useState([newTask("sewing")]);
  //state set for userinput , initially an empty string
  const [userInput, setUserInput] = useState("");
  //function to store the input box value in State
  const updateValue = (event) => {
    setUserInput(event.target.value);
  };
  //an additem function that takes a task from userInput and updates the state of an array
  const addItem = (event) => {
    let t = newTask(userInput);
    let newArray = [...tasks];
    newArray.push(t);

    setTasks(newArray);
    //resets input box to blank
    setUserInput("");
    //prevents from onSubmit refreshing the page
    event.preventDefault();
  };

  const deleted = (props) => {
    let x = props.title;
    let newArray = [...tasks];
    newArray.pop(x);
    setTasks(newArray);
  };

  // const changePosition = (item) => {
  //   let newArray = [...tasks];
  //   newArray.push(newArray.splice(newArray.indexOf(item, 1)[0]));
  //   setTasks(newArray);
  // };

  return (
    <div className="wholePage">
      <h1 className="header">Add tasks to a to do list</h1>
      <form className="form" onSubmit={addItem}>
        <input value={userInput} onChange={updateValue} />
        <button onClick={addItem}>add an item</button>
      </form>
      <h1>To Do:</h1>
      <ul>
        <div>
          {tasks.map((task, index) => (
            <Task key={index} task={task} func={deleted} />
          ))}
        </div>
      </ul>
    </div>
  );
};

const Task = (props) => {
  const [task, setTask] = useState(props.task);

  const markCompleted = () => {
    let t = newTask(task.title);
    t.completed = true;
    setTask(t);
  };

  return (
    <div>
      <li
        className="listLine"
        key="value"
        style={
          task.completed
            ? { textDecoration: "line-through", opacity: "0.6" }
            : { textDecoration: "none" }
        }
      >
        {task.title}
      </li>
      <button onClick={props.func}>Delete</button>
      <button onClick={markCompleted}>Mark as done</button>
    </div>
  );
};

export default ShoppingList;
