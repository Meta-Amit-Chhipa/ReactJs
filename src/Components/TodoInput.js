import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos } from './reducer'

const mapStateToProps=(state)=>{
  return{
    todos:state
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addTodo:(obj)=>dispatch(addTodos(obj)),
  }
}
function TodoInput(props) {
  console.log(props)
  const [todo,setTodo]=useState("")
  const [desc,setDesc]=useState("")
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleDescriptionChange=(e)=>{
    setDesc(e.target.value)
  }
  const add=(e)=>{
    e.preventDefault()
    props.addTodo({
      item:todo,
      description:desc,
      completed:false
    });
    setTodo("")
    setDesc("")
  }
  return (
    <div className="container">
      <h4>Todo List</h4>
      <form onSubmit={(e)=>add(e)}>
        <div className="form-group">
          <label>Title</label>
          <input type ="text" value={todo}  onChange={(e)=>handleChange(e)} className="form-control" required={true}/>
        </div>
        <div className="form-group">
        <label>Description</label>
          <input type ="text" value={desc}  onChange={(e)=>handleDescriptionChange(e)} className="form-control" required ={true}/>
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoInput);
