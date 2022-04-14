import React from 'react'

export class Reference extends React.Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    ClickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}