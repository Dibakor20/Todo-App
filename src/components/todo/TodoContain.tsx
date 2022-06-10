import React, { useState } from 'react';
import { PlusIcon, TitleSpan, TodoBlog, TodoBody, AddButton, TodoContainer, TodoElement, TodoTitle, TodoInput, SubmitButton } from './TodoContain.styled';

const TodoContain = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(true)
    }

    return (
        <>
            <TodoContainer>
                <TodoBody>
                    <TodoElement>
                        {
                            toggle ? <><TodoInput type="text" placeholder='Your Task'/> <SubmitButton>Submit</SubmitButton></> : <><TodoTitle>You have got<TitleSpan> 7 task </TitleSpan>today</TodoTitle><AddButton onClick={handleToggle}><PlusIcon />Add New</AddButton></>
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