import React from "react";
import FRInput from "./FRInput";

export class FRParent extends React.Component{
    constructor(){
        super()
        this.InputRef=React.createRef()
    }
    HandleRef=()=>{
        this.InputRef.current.focus()
    }
    render(){
        return(
            <div>
                <FRInput ref={this.InputRef}/>
                <button onClick={this.HandleRef}>FocusInput</button>
            </div>
        )
    }
}