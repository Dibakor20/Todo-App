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
        Add_Todo: (state, {payload}: PayloadAction<string>) => {
            let todo = {
                id:Math.round(Math.random()*10000),
                text: payload,
            }
            state.todoList.push(todo)
        },
        Delete_Todo: (state, action) => {
            let {todoList} = state
            state.todoList = todoList.filter((item)=>item.id !== action.payload.id )
        },
        Edit_Todo: (state,{payload}: PayloadAction<Itask>) => {
            let {todoList} = state;
            state.todoList = todoList.map((item:Itask)=>item.id === payload.id ? payload : item)
        }
    }
})

export const { Add_Todo,Delete_Todo,Edit_Todo } = todoSlice.actions;
export default todoSlice.reducer;