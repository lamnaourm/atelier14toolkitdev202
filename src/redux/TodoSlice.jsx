import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";


const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {
                id: uuid(),
                task: "Reviser Javascript",
                completed: false
            },
            {
                id: uuid(),
                task: "Reviser Javas",
                completed: true
            },
            {
                id: uuid(),
                task: "Reviser Python",
                completed: false
            }
        ]
    },
    reducers: {
        addtache: (state, action) => {
            state.tasks = [...state.tasks, { id: uuid(), task: action.payload, completed: false }]
        },
        deleteall: (state,action) => {
            state.tasks = []
        },
        deletetermines: (state,action) => {
            state.tasks = state.tasks.filter(t => !t.completed)
        },
        deletenotermines: (state,action) => {
            state.tasks = state.tasks.filter(t => t.completed)
        },
        deletetache : (state, action) =>{
            state.tasks = state.tasks.filter(t => t.id != action.payload)
        },
        updatetache : (state, action) => {
            state.tasks = state.tasks.map(t => t.id == action.payload ? {...t, completed:!t.completed}:t)
        }
    }
})

export const {updatetache, deletetache, addtache, deleteall, deletetermines, deletenotermines } = TodoSlice.actions
export default TodoSlice.reducer