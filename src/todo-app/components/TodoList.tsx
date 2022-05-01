import React from 'react';

interface IProps {
    name: string;
    Key?: number | string;
}
const TodoList = ({name}: IProps) => {
    return (
        <>
            <>{ name}</>
        </>
    );
};

export default TodoList;