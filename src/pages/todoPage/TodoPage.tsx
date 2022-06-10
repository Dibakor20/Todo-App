import React from 'react';
import TodoContain from '../../components/todo/TodoContain';
import TodoNavbar from '../../components/todo/TodoNavbar';
import { CardBackground, TodoBackground } from './TodoPage.styled';

const TodoPage = () => {
    return (
        <>
            <TodoBackground>
                <CardBackground>
                    <TodoNavbar />
                    <TodoContain />
               </CardBackground>
            </TodoBackground>   
        </>
    );
};

export default TodoPage;