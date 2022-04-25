import React, { useState, useMemo } from "react";

export default function MemoHook() {
    const [CountOne, SetCountOne] = useState(0)
    const [CountTwo, SetCountTwo] = useState(0)
    const IncrementOne = () => {
        SetCountOne(CountOne + 1)
    }
    const IncrementTwo = () => {
        SetCountTwo(CountTwo + 1)
    }

    // wihtout Memo Hooks 
    // const isEven = () => {
    //     let i=0
    //     while(i<200000000) i++
    //     return CountOne % 2===0
    // }

    // With Memo Hooks
    const isEven=useMemo(()=>{
        let i=0
        while(i<200000000) i++
        return CountOne % 2===0
    },[CountOne])
    return (
        <div>
            <div>
                <button onClick={IncrementOne}>Count {CountOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={IncrementTwo}>Count {CountTwo}</button>
            </div>
        </div>
    )
}