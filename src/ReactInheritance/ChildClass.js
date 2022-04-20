import React from "react";

export class ChildClass extends React.Component{
    render() {
        return (
            <div>
                <h4>Child Class</h4>
                {this.props.message}
            </div>
        )
    }
}