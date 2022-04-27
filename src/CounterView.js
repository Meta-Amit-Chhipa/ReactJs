import React from "react";
import CounterButton from "./Components/CounterButton";
import CounterDisplay from "./Components/CounterDisplay";
import { CounterContextFile } from "./Context/Counter-Context";

export default function CounterView() {
    return (
        <div>
            <CounterContextFile>
                <CounterDisplay />
                <CounterButton />
            </CounterContextFile>
        </div>
    )
}