import {createSlice} from '@reduxjs/toolkit'

const initialState=[]
const addTodoReducer=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.push(action.payload)
            return state
        },
        removeTodos:(state,action)=>{
            return state.filter((item,index)=>index!==action.payload)
        },
        completeTodos: (state, action) => {
            return state.map((todo,index) => {
              if (index=== action.payload) {
                return {
                  ...todo,
                  completed:!todo.completed,
                };
              }
              return todo;
            });
          },
    }
})

export const {addTodos,removeTodos,completeTodos} =addTodoReducer.actions;
export const reducer=addTodoReducer.reducer;