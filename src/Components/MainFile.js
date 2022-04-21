import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export default class MainFile extends React.Component {
    constructor() {
        super()
        this.state = {
            ShowItem: "all",
            Items: []
        }
    }
    handleCallback = (FinalData) => {
        this.setState({
            Items: FinalData,
        })
    }
    render() {
        return (
            <>
                <div>
                    <Router>
                        <Navigation />
                        <Routes>
                            <Route exact path="/" element={<TodoForm parentCallback={this.handleCallback} />} />
                            <Route exact path="/list/*" element={<TodoList FinalItems={this.state.Items} />} />
                        </Routes>
                    </Router>
                </div>
            </>
        )
    }
}