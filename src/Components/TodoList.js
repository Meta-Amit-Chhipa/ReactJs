import React from "react";
import './TodoStyle.css';
export class TodoList extends React.Component{
    render(){
        return(
           <div className="container">
               <br/><br/>
               <div className="btn-group">
               <button className="btn btn-success" onClick={()=>this.props.UpdateToShow("all")} >All Task</button>
               <button className="btn btn-success" onClick={()=>this.props.UpdateToShow("Active")} >Active Task</button>
               <button className="btn btn-success" onClick={()=>this.props.UpdateToShow("done")}>Completed Task</button>
               </div>
               <br/><br/>
               {
                   this.props.items.map(Number=>(
                    <div>
                    {     Number.title!=="" && Number.description!=="" ? 
                          <div className="card">
                          <div className="card-body">
                          <h5 className="card-title float-left">
                          <span style={{ textDecoration:Number.completed ? "line-through" : "" }}>
                           <input type="checkbox" onChange={()=>this.props.MarkItem(Number.id)} checked={Number.completed} className="form-check-input" />
                           {Number.title}
                           </span></h5>
                           <div className="btn-group float-right">
                           {/* <button onClick={()=>this.props.MarkItem(Number.id)} className="btn btn-success">🗸</button> */}
                           <button onClick={()=>this.props.deleteItem(Number.id)} className="btn btn-danger">X</button>
                           </div>
                          </div>
                       </div>:null
                    }
                    </div>
                   ))
               }
           </div>
        )
    }
}