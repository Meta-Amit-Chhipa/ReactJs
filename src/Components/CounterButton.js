import React, { useContext } from "react";
import { CounterContext } from "../Context/Counter-Context";

export default function CounterButton(){
    const [Count,SetCount]=useContext(CounterContext)

    const Increment=()=>{
        SetCount(Count+1)
    }

    const Decrement=()=>{
        SetCount(Count-1)
    }
    const Reset=()=>{
        SetCount(0)
    }
    return(
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}