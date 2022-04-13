import React from "react";
export class TodoForm extends React.Component{
    render(){
        return(
            <div className="container">
                <form onSubmit={this.props.Submit}>
                    <div className="form-group">
                        <label>Enter Item</label>
                        <input type="text" value={this.props.title} onChange={this.props.InputChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={this.props.Description} onChange={this.props.DescriptionChange} rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}