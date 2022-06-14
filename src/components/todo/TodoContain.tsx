import React, { useEffect, useState } from 'react';
import { PlusIcon, TitleSpan, TodoBlog, TodoBody, AddButton, TodoContainer, TodoElement, TodoTitle, TodoInput, SubmitButton, TodoText, TodoError } from './TodoContain.styled';
import {RootState} from '../../redux/Store'
import { useDispatch, useSelector } from 'react-redux';
import { Add_Todo,Itask } from '../../redux/TodoAction';
import TaskSection from './TaskSection';
import { FaBullseye } from 'react-icons/fa';

const TodoContain = () => {
    const [toggle, setToggle] = useState(false)
    const [todoTask, setTodoTask] = useState<Itask>({ text: "",todoError:null })
    const dispatch = useDispatch();
    const todoList = useSelector((state:RootState) => state.todo.todoList);
    const { text, todoError } = todoTask;
    const handleToggle = () => {
        setToggle(true)
    }

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setTodoTask({...todoTask, [e.currentTarget.name]: e.currentTarget.value})
    }

    const addTodo = () => {
        if (!todoTask.text.length) {
            setTodoTask({...todoTask,todoError:"Input field should not be empty"})
        }
        else if(todoTask.text.length) {
            dispatch(Add_Todo(todoTask))
            setTodoTask({ text: '',todoError:null})
            setToggle(false)
        }
    }

    
    
    return (
        <>
            <TodoContainer>
                <TodoBody>
                    <TodoElement>
                    
                        {
                            toggle ? <><TodoInput onChange={handleChange} value={todoTask.text} name="text" id='text' type="text" placeholder='Your Task' />
                                <SubmitButton onClick={addTodo}>Submit</SubmitButton> </> : <><TodoTitle>You have got<TitleSpan> {todoList.length} task </TitleSpan>today</TodoTitle><AddButton onClick={handleToggle}><PlusIcon />Add New</AddButton></>
                        }
                    </TodoElement>
                    {todoError ? <TodoError>{ todoError}</TodoError>:null}
                     <TodoText>On Hold</TodoText>   
                    {
                        todoList.map((item) => <TaskSection  key={item?.id}  item={item} />)
                    }
                </TodoBody>
                <TodoBlog>

                </TodoBlog>
            </TodoContainer>
        </>
    );
};

export default TodoContain;