import React, { useEffect, useState,useRef } from "react";

function ReferenceHook(){
    const [timer,SetTimer]=useState(0)
    const IntervalRef=useRef()
    useEffect(()=>{
        IntervalRef.current=setInterval(()=>{
            SetTimer(Prevs=>Prevs+1)
        },1000)
        return ()=>{
            clearInterval(IntervalRef.current)
        }
    },[])
    return(
        <div>
            <h4>Time Application </h4>
            Time is {timer}
            <button onClick={()=>clearInterval(IntervalRef.current)}>ClearTime</button>
        </div>
    )
}

export default ReferenceHook;