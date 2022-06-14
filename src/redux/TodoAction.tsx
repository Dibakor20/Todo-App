import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Itask {
    id?: number,
    text: string,
    key?: number | string,
    todoError?: null | string,
    length?:number,
}

const initialState = {
    todoList: [] as Itask[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        Add_Todo: (state, action) => {
            let todo = {
                id:Math.random()*100,
                text:action.payload.text,
            }
            state.todoList.push(todo)
        },
        Delete_Todo: (state, action) => {
            let {todoList} = state
            state.todoList = todoList.filter((item)=>item.id !== action.payload.id )
        }
    }
})

export const { Add_Todo,Delete_Todo } = todoSlice.actions;
export default todoSlice.reducer;