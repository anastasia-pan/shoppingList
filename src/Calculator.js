import { evaluate } from "mathjs";
import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const numbers = [
    "+",
    "-",
    "/",
    "x",
    "%",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
  ];

  //   "=",
  //   "AC",

  const [userInput, setUserInput] = useState("");
  const [userTotal, setUserTotal] = useState([]);
  const [title, setTitle] = useState("");

  const getValue = (value) => {
    let x = `${userInput}${value}`;
    setTitle(x);
  };
  const getTotal = (userInput) => {
    console.log(userInput);
    let total = evaluate(userInput);
    setUserInput(total);
    setTitle(total);
  };

  const clearInput = () => {
    setUserInput("");
    setTitle(userInput);
  };

  const playClick = () => {
    const click = "./sounds/click";
    click.play();
  };

  return (
    <>
      <h1>{title}</h1>
      <div>
        {numbers.map((number, index) => (
          <Button key={index} number={number} getValue={getValue} />
        ))}
        <button onClick={getTotal}> = </button>
        <button onClick={clearInput}> AC </button>
      </div>
    </>
  );
};

const Button = (props) => {
  const handleClick = (event) => {
    props.getValue(event.target.value);
  };

  return (
    <>
      <button value={props.number} onClick={handleClick}>
        {props.number}
      </button>
    </>
  );
};

const Head = (props) => {
  return <></>;
};

export default Calculator;
