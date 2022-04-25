import React,{useReducer} from "react";


const intialState={
    Counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {Counter:state.Counter + action.value}
        case 'decrement':
            return {Counter:state.Counter - action.value}
        case 'reset':
            return intialState
        default:
            return state
    }
}
export default function ReducerHooks(){
    const [count,dispatch]=useReducer(reducer,intialState)
    return(
        <div>
            <p>Final Result is {count.Counter}</p>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}