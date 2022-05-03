import React from "react";
export class TodoForm extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Description:''
        }
    }
    HandleChange = (Event) => {
        this.setState({
            Title: Event.target.value
        })
    }
    HandleDescription = (Event) => {
        this.setState({
            Description: Event.target.value
        })
    }
    HandleSubmit = (Event) => {
        Event.preventDefault()
        this.props.addItems(this.state.Title,this.state.Description)
        this.setState({
            Title:'',
            Description:''
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group">
                        <label>Enter Item</label>
                        <input type="text" value={this.state.Title} onChange={this.HandleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={this.state.Description} onChange={this.HandleDescription} rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
