import React,{useContext} from 'react'
import { CounterContext } from '../Context/Counter-Context'


export default function CounterDisplay(){
    const [Count]=useContext(CounterContext)
    return(
        <div>
            <h4>Counter {Count}</h4>
        </div>
    )
}