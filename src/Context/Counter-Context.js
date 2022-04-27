import React,{useState,createContext} from 'react'


export const CounterContext=createContext()
export const CounterContextFile=(props)=>{
    const [Count,SetCount]=useState(0)

    return(
        <CounterContext.Provider value={[Count,SetCount]}>
            {props.children}
        </CounterContext.Provider>
    )
}