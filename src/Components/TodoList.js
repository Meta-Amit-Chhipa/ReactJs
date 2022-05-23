import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { addTodos, completeTodos, removeTodos } from './reducer'

const mapStateToProps=(state)=>{
  return{
    todos:state
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addTodo:(obj)=>dispatch(addTodos(obj)),
    removeTodo:(id)=>dispatch(removeTodos(id)),
    completeTodo:(id)=>dispatch(completeTodos(id))
  }
}

function TodoList(props) {
  const [show,setShow]=useState("all")
    const updateShowItem = (Name) => {
        setShow(Name)
    };
    let finalTodo = []
    if (show=== "all")
        finalTodo = props.todos
    else if (show === "active") {
        finalTodo = props.todos.filter(item => !item.completed);
    } else if (show === "done") {
        finalTodo = props.todos.filter(item => item.completed);
    }
    else
        finalTodo = props.todos
  console.log("This is "+props.todos)
  return (
    <div className="container">
      <br/>
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={() => updateShowItem("all")}>All</button>
        <button className="btn btn-secondary" onClick={() => updateShowItem("active")}>Active</button>
        <button className="btn btn-secondary" onClick={() => updateShowItem("done")}>Completed</button>
        <br/>
      </div>
      {
          finalTodo.map((item,index)=>(
            <div className="card">
             <div className="card-body">
              <div className="card-header">
                  <h5>
                    <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
                      <input type="checkbox" onChange={() => props.completeTodo(index)} checked={item.completed} className="form-check-input" />
                      {item.item}
                    </span>
                  </h5>
              </div>
              <div className="card-footer">
                <div className="btn-group">
                <button className="btn btn-info"><Link to={`/Details/${index}`} className="text-white">ViewDetail</Link></button>
                  <button className="btn btn-danger" key={index} id={index} onClick={()=>props.removeTodo(index)}>X</button>
                </div>
              </div>
             </div>
            </div>
          ))
      }
    </div>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
