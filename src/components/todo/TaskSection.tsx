import React from "react";
import { useDispatch} from "react-redux";
import { Delete_Todo, Itask } from "../../redux/TodoAction";
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
  item:Itask,
}

const TaskSection = ({item}: IProps) => {
  const dispatch = useDispatch()

  return (
    <>
      <TaskCard>
        <TaskTable>
          <TaskList>
            <TaskTitle>{item.text}</TaskTitle>
          </TaskList>
          <TaskStatus>Pending</TaskStatus>
          <EditButton />
          <DeleteButton onClick={()=>dispatch(Delete_Todo(item))} />
        </TaskTable>
      </TaskCard>
    </>
  );
};

export default TaskSection;
