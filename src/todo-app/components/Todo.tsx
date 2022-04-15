import React, { useState } from "react";
import {
  TodoButton,
  TodoCard,
  TodoSection,
  TodoTitle,
  TodoInput,
} from "./Todo.styled";

const Todo = () => {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    setToggle(true);
  };

  const handleSubmit = () => {
    
    setToggle(false)
  }

  return (
    <>
      <TodoSection>
        <TodoCard>
          {toggle ? (
            <TodoInput></TodoInput>
          ) : (
            <TodoTitle>You have got 7 task today</TodoTitle>
          )}
          {toggle ? (
            <TodoButton onClick={handleSubmit}>Submit</TodoButton>
          ) : (
            <TodoButton onClick={handleChange}>Add Task</TodoButton>
          )}
        </TodoCard>
      </TodoSection>
    </>
  );
};

export default Todo;
