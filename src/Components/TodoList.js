import React from "react";
import './TodoStyle.css';
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
export class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            showItem: "all",
            Show: '', GetFilterData: []
        }
    }
    HandleDelete = (id) => {
        const FilterItems = this.state.FinalItems.filter(item => item.id !== id)
        this.setState({
            FinalItems: FilterItems,
            GetFilterData:this.state.GetFilterData.filter(item=>item.id!==id)
        })
    }
    MarkItem = (id, completed) => {
        const MarkedItem = this.state.FinalItems.map(item => {
            item.id === id && (item.completed = !item.completed)
            return item
        })
        this.setState({
            FinalItems: MarkedItem
        })
    }
    UpdateShowItem = (Name) => {
        this.setState({
            showItem: Name
        });
    };
    GetDetails = (id) => {
        this.setState({
            GetFilterData: this.state.FinalItems.filter(item => item.id === id),
            Show: true
        })
    }
    render() {
        let FinalTodo = []
        if (this.state.showItem === "all")
            FinalTodo = this.state.FinalItems
        else if (this.state.showItem === "Active") {
            FinalTodo = this.state.FinalItems.filter(item => !item.completed);
        } else if (this.state.showItem === "done") {
            FinalTodo = this.state.FinalItems.filter(item => item.completed);
        }
        else
            FinalTodo = this.state.FinalItems
        return (
            <div className="container">
                <br /><br />
                <div className="btn-group">
                    <button className="btn btn-success" onClick={() => this.UpdateShowItem("all")} >All Task</button>
                    <button className="btn btn-success" onClick={() => this.UpdateShowItem("Active")} >Active Task</button>
                    <button className="btn btn-success" onClick={() => this.UpdateShowItem("done")}>Completed Task</button>
                </div>
                <br /><br />
                {
                    FinalTodo.map(Number => (
                        <div>
                            {Number.title !== "" && Number.description !== "" ?
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title float-left">
                                            <span style={{ textDecoration: Number.completed ? "line-through" : "" }}>
                                                <input type="checkbox" onChange={() => this.MarkItem(Number.id)} checked={Number.completed} className="form-check-input" />
                                                {Number.title}
                                            </span></h5>
                                        <div className="btn-group float-right">
                                            <button className="btn btn-info" onClick={() => this.GetDetails(Number.id)} ><Link to="Details" className="text-white">ViewDetail</Link></button>
                                            <button onClick={() => this.HandleDelete(Number.id)} className="btn btn-danger">X</button>
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>
                    ))
                }
                <br /><br />
                {this.state.Show ? <h4>Details Of List</h4> : null}
                {
                    this.state.Show && this.state.GetFilterData.length > 0 &&
                    <Routes>
                        <Route exact path="/Details" element={<Details items={this.state.GetFilterData} />} />
                    </Routes>
                }
            </div>
        )
    }
}
