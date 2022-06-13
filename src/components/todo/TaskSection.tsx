import React from "react";
import {
  EditButton,
  TaskCard,
  TaskList,
  TaskStatus,
  TaskTable,
  TaskTitle,
} from "./TaskSection.styled";

interface IProps {
  text: string;
  Key?: number | string;
}

const TaskSection = ({ text }: IProps) => {
  return (
    <>
      <TaskCard>
        <TaskTable>
          <TaskList>
            <TaskTitle>{text}</TaskTitle>
          </TaskList>
          <TaskStatus>Pending</TaskStatus>
          <EditButton />
        </TaskTable>
      </TaskCard>
    </>
  );
};

export default TaskSection;
