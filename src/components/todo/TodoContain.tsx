import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_Todo } from '../../redux/TodoAction';
import { PlusIcon, TitleSpan, TodoBlog, TodoBody, AddButton, TodoContainer, TodoElement, TodoTitle, TodoInput, SubmitButton } from './TodoContain.styled';

interface ITask {
    task: string,
    id?:number
}

const TodoContain = () => {
    const [toggle, setToggle] = useState(false)
    const [todoTask,setTodoTask] = useState<ITask>({task:''})

    const handleToggle = () => {
        setToggle(true)
    }

    const dispatch = useDispatch();

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
        setTodoTask({ ...todoTask, [e.currentTarget.name]: e.currentTarget.value})
        console.log(todoTask)
    }

    const addTodo = () => {
        dispatch(Add_Todo({ newItem: todoTask.task }));
        setTodoTask({...todoTask, task:''})
    }

    return (
        <>
            <TodoContainer>
                <TodoBody>
                    <TodoElement>
                        {
                            toggle ? <><TodoInput onChange={handleChange} value={todoTask?.task} name="task" id='task' type="text" placeholder='Your Task'/> <SubmitButton onClick={addTodo}>Submit</SubmitButton></> : <><TodoTitle>You have got<TitleSpan> 7 task </TitleSpan>today</TodoTitle><AddButton onClick={handleToggle}><PlusIcon />Add New</AddButton></>
                        }
                    </TodoElement>
                </TodoBody>
                <TodoBlog>

                </TodoBlog>
            </TodoContainer>
        </>
    );
};

export default TodoContain;