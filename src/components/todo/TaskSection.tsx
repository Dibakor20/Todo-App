import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transpileModule } from "typescript";
import { RootState } from "../../redux/Store";
import { Delete_Todo, Edit_Todo, Itask } from "../../redux/TodoAction";
import {
  DeleteButton,
  EditButton,
  TaskCard,
  TaskList,
  TaskStatus,
  TaskTable,
  TaskTitle,
} from "./TaskSection.styled";

interface IProps {
  Key?: number | string;
  item: Itask;
  setToggle: any;
  setIsUpdate: any;
  setTodoTask: any;
  text: string;
}

const TaskSection = ({
  item,
  setToggle,
  setIsUpdate,
  setTodoTask,
  text
}: IProps) => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  const onEditToggle = (text: string) => {
    setIsUpdate(true);
    setToggle(true);
    setTodoTask({ id: item.id, text: item.text });
    // console.log("update",todoList)
  };

  return (
    <>
      <TaskCard>
        <TaskTable>
          <TaskList>
            <TaskTitle>{item.text}</TaskTitle>
          </TaskList>
          <TaskStatus>Pending</TaskStatus>
          <EditButton onClick={() => onEditToggle(text)} />
          <DeleteButton onClick={() => dispatch(Delete_Todo(item))} />
        </TaskTable>
      </TaskCard>
    </>
  );
};

export default TaskSection;
