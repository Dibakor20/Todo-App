import React, { useEffect, useState } from 'react';

import { PlusIcon, TitleSpan, TodoBlog, TodoBody, AddButton, TodoContainer, TodoElement, TodoTitle, TodoInput, SubmitButton, TodoText } from './TodoContain.styled';
import {RootState} from '../../redux/Store'
import { useDispatch, useSelector } from 'react-redux';
import { Add_Todo } from '../../redux/TodoAction';

const TodoContain = () => {
    const [toggle, setToggle] = useState(false)
    const [todoTask,setTodoTask] = useState({text:""})

    const dispatch = useDispatch();
    const todoList = useSelector((state:RootState) => state.todo.todoList);

    const handleToggle = () => {
        setToggle(true)
    }

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setTodoTask({...todoTask, [e.currentTarget.name]: e.currentTarget.value})
    }

    const addTodo = () => {
        dispatch(Add_Todo(todoTask))
        setTodoTask({text:''})
   }

    return (
        <>
            <TodoContainer>
                <TodoBody>
                    <TodoElement>
                        {
                            toggle ? <><TodoInput onChange={handleChange} value={todoTask.text} name="text" id='text' type="text" placeholder='Your Task'/> <SubmitButton onClick={addTodo}>Submit</SubmitButton></> : <><TodoTitle>You have got<TitleSpan> 7 task </TitleSpan>today</TodoTitle><AddButton onClick={handleToggle}><PlusIcon />Add New</AddButton></>
                        }
                    </TodoElement>
                     <TodoText>On Hold</TodoText>   
                    {
                        todoList.map((item) => <li>{item.text}</li>)
                    }
                </TodoBody>
                <TodoBlog>

                </TodoBlog>
            </TodoContainer>
        </>
    );
};

export default TodoContain;