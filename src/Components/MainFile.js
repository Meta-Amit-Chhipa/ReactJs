import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export default class MainFile extends React.Component {
    constructor() {
        super()
        this.state = {
            Items: [
                {
                    Title: '',
                    Description: '',
                    Completed: ''
                }
            ],
        }
    }
    addItems = (value, description) => {
        this.setState({
            Items: [...this.state.Items, { Title: value, Description: description, Completed: false }]
        })
    }
    deleteItem = (id) => {
        const todos = this.state.Items.filter((todo, todoIndex) => todoIndex !== id)
        this.setState({ Items: todos })
    }
    MarkItem = (id) => {
        this.setState({
            todos: this.state.Items.map((todo, index) => {
                if (index === id) {
                    todo.Completed = !todo.Completed
                }
                return todo;
            })
        })
    }
    render() {
        return (
            <>
                <div>
                    <Router>
                        <Navigation />
                        <Routes>
                            <Route exact path="/" element={<TodoForm addItems={this.addItems} />} />
                            <Route exact path="/list" element={<TodoList FinalItems={this.state.Items} deleteItem={this.deleteItem} MarkItem={this.MarkItem} />} />
                        </Routes>
                    </Router>
                </div>
            </>
        )
    }
}
