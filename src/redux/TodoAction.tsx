import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoState {
    id?:number,
    task: string,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoState:[ {
            id:1,
            task: 'hellow',  
        }  ] 
    },
    reducers: {
        Add_Todo: (state,action) => {
            let newTodoList = {
                id: Math.random(),
                task:action.payload.newItem
            }
            state.todoState.push(newTodoList)
        }
    }
}) 


export const { Add_Todo } = todoSlice.actions;

export default todoSlice.reducer;