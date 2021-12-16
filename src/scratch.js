const deleted = (props) => {
  let x = props.title;
  let newArray = [...tasks];
  newArray.pop(x);
  setTasks(newArray);
};
