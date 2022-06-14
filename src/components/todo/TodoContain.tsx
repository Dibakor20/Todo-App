import React, { useState } from "react";
import {
  PlusIcon,
  TitleSpan,
  TodoBlog,
  TodoBody,
  AddButton,
  TodoContainer,
  TodoElement,
  TodoTitle,
  TodoInput,
  SubmitButton,
  TodoText,
  TodoError,
} from "./TodoContain.styled";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { Add_Todo, Edit_Todo, Itask } from "../../redux/TodoAction";
import TaskSection from "./TaskSection";

const TodoContain = () => {
  const [toggle, setToggle] = useState(false);
  const [todoTask, setTodoTask] = useState<Itask>({
    text: "",
    todoError: null,
  });
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const { text, todoError, id } = todoTask;

  const handleToggle = () => {
    setToggle(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoTask({ ...todoTask, [e.currentTarget.name]: e.currentTarget.value });
  };

  const addTodo = () => {
    if (!todoTask.text.length) {
      setTodoTask({
        ...todoTask,
        todoError: "Input field should not be empty",
      });
    } else if (isUpdate) {
      dispatch(Edit_Todo({ text: todoTask.text, id: id }));
      setIsUpdate(false);
      setToggle(false);

    } else if (todoTask.text.length) {
      dispatch(Add_Todo(todoTask.text));
      setTodoTask({ text: "", todoError: null });
      setToggle(false);
    }
  };

  return (
    <>
      <TodoContainer>
        <TodoBody>
          <TodoElement>
            {isUpdate && toggle ? (
              <>
                <TodoInput
                  onChange={handleChange}
                  value={text}
                  name="text"
                  id="text"
                  type="text"
                />
                <button onClick={addTodo}>update</button>{" "}
              </>
            ) : toggle ? (
              <>
                <TodoInput
                  onChange={handleChange}
                  value={text}
                  name="text"
                  id="text"
                  type="text"
                />
                <SubmitButton onClick={addTodo}>Submit</SubmitButton>{" "}
              </>
            ) : (
              <>
                <TodoTitle>
                  You have got<TitleSpan> {todoList.length} task </TitleSpan>
                  today
                </TodoTitle>
                <AddButton onClick={handleToggle}>
                  <PlusIcon />
                  Add New
                </AddButton>
              </>
            )}
          </TodoElement>
          {todoError ? <TodoError>{todoError}</TodoError> : null}
          <TodoText>On Hold</TodoText>
          {todoList?.map((item) => (
            <TaskSection
              setTodoTask={setTodoTask}
              setIsUpdate={setIsUpdate}
              setToggle={setToggle}
              text={text}
              key={item?.id}
              item={item}
            />
          ))}
        </TodoBody>
        <TodoBlog></TodoBlog>
      </TodoContainer>
    </>
  );
};

export default TodoContain;
