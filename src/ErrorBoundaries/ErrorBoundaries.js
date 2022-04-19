import React from "react";

export class ErrorBoundaries extends React.Component {
    constructor() {
        super()
        this.state = {
            HasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            HasError: true
        }
    }
    componentDidCatch(error,errorinfo){
        console.log(error);
        console.log(errorinfo);
    }
    render() {
        if (this.state.HasError) {
            return <h4>Somthing Went Wrong</h4>
        }
        return this.props.children;
    }
}