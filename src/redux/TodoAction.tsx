import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Itask {
    id?: number,
    text:string,
}

const initialState = {
    todoList: [] as Itask[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        Add_Todo: (state, action:PayloadAction<Itask>) => {
            const todo = {
                id:Math.random()*100,
                text:action.payload.text,
            }
            state.todoList.push(todo)
        }
    }
})

export const { Add_Todo } = todoSlice.actions;
export default todoSlice.reducer;