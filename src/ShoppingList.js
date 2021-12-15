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
        {tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
