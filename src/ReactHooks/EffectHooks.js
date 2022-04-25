import React, { useState,useEffect } from 'react'

export default function EffectHooks(){
    const [Count,SetCount]=useState(0)
    const [Name,SetName]=useState('')

    useEffect(()=>{
        console.log("Updating title")
        document.title=`You Clicked ${Count} times`;
    },[Count])
    return(
        <div>
            <input type="text" value={Name} onChange={(E)=>{SetName(E.target.value)}}/>
            <button onClick={()=>SetCount(Count+1)}>Click {Count}</button>
        </div>
    )
}