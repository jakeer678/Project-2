import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setValid(true);
    } else if (event.target.value.trim().length === 1) {
      setValid(false);
    }
    setEnteredValue(event.target.value);
  };

  //when user doesnt enter any input it will not add any items
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`form-controls ${!isValid ? "invalid" : ""}`}>
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
