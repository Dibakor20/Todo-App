import React, { useEffect, useState } from "react";
import {
  TodoButton,
  TodoCard,
  TodoSection,
  TodoTitle,
  TodoInput,
  Todohold,
} from "./Todo.styled";
import TodoList from "./TodoList";

interface ITask {
  name: string;
  id?: number;
  key?: number | string;
  
}

const Todo = () => {
  const [tododata, setTodoData] = useState<ITask>({name:""})
  const [data, setData] = useState<ITask[]>([])
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    setTodoData({...tododata,id:Math.round(Math.random()*9999), [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setData([...data,tododata])
    setToggle(false);
    setTodoData({
      name:""
    }) 
  };
  
  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <>
      <TodoSection>
        <TodoCard>
          {toggle ? (
            <TodoInput type="text" value={tododata?.name} onChange={handleChange}  name="name" id="name"></TodoInput>
          ) : (
            <TodoTitle>You have got 7 task today</TodoTitle>
          )}
          {toggle ? (
            <TodoButton onClick={(e)=>handleSubmit(e)}>Submit</TodoButton>
          ) : (
            <TodoButton onClick={handleToggle}>Add Task</TodoButton>
          )}
        </TodoCard>
        <Todohold>On Hold</Todohold>
            {
          data?.map((item) => 
            <TodoList key={item?.id} name={item?.name} />
              )
            }
      </TodoSection>
    </>
  );
};

export default Todo;

