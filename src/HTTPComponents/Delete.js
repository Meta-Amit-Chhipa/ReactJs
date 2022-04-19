import React from 'react'
import axios from 'axios'

class Delete extends React.Component {
    constructor() {
        super()
        this.state = {
            Post: [],
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    Post: res.data
                })
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    Deletedata = (id, e) => {
        e.preventDefault()
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    Post: this.state.Post.filter(item => item.id !== id)
                })
            })
            .catch(error => {
                console.log("Wrong")
            })
    }
    render() {
        return (
            <div className="container">
                {
                    this.state.Post.map(Number => <div>{Number.id}-{Number.title} <button onClick={(e) => this.Deletedata(Number.id, e)} className="btn btn-danger">Delete</button></div>)
                }
            </div>
        )
    }
}

export default Delete;