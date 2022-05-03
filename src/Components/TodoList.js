import React from "react";
import './TodoStyle.css';
import { Button, Modal} from 'react-bootstrap';
export class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            showItem: "all",
            show: false,
            getDetail: []
        }
    }
    updateShowItem = (Name) => {
        this.setState({
            showItem: Name
        });
    };
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    getDetail = (id) => {
        this.setState({
            getDetail: this.state.FinalItems.filter((item, index) => (index === id)),
            show: true
        })
    }
    render() {
        let FinalTodo = []
        if (this.state.showItem === "all")
            FinalTodo = this.props.FinalItems
        else if (this.state.showItem === "active") {
            FinalTodo = this.props.FinalItems.filter(item => !item.Completed);
        } else if (this.state.showItem === "done") {
            FinalTodo = this.props.FinalItems.filter(item => item.Completed);
        }
        else
            FinalTodo = this.props.FinalItems
        return (
            <div className="container">
                <br /><br />
                <div className="btn-group">
                    <button className="btn btn-success" onClick={() => this.updateShowItem("all")} >All Task</button>
                    <button className="btn btn-success" onClick={() => this.updateShowItem("active")}  >Active Task</button>
                    <button className="btn btn-success" onClick={() => this.updateShowItem("done")}  >Completed Task</button>
                </div>
                <br /><br />
                {
                    FinalTodo.map((Number, index) => (
                        <div>
                            {Number.Title !== "" && Number.Description !== "" ?
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title float-left">
                                            <span style={{ textDecoration: Number.Completed ? "line-through" : "" }}>
                                                <input type="checkbox" onChange={() => this.props.MarkItem(index)} checked={Number.Completed} className="form-check-input" />
                                                {Number.Title}
                                            </span></h5>
                                        <div className="btn-group float-right">
                                            <button className="btn btn-info" onClick={() => this.getDetail(index)}>ViewDetail</button>
                                            <button key={index} id={index} onClick={() => this.props.deleteItem(index)} className="btn btn-danger">X</button>
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>
                    ))
                }
                <Modal show={this.state.show} >
                    {
                        this.state.getDetail.map(Number => (
                            <div>
                                <Modal.Header>
                                    <Modal.Title>{Number.Title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{Number.Description}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </div>
                        ))
                    }
                </Modal>
            </div>
        )
    }
}
