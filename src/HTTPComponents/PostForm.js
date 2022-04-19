import React from "react";
import axios from 'axios'

class PostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            UserId: '',
            Title: '',
            Body: ''
        }
    }
    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    HandleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(responce => {
                console.log(responce)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { UserId, Title, Body } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group">
                        <label>UserId</label>
                        <input type="text" name="UserId" value={UserId} onChange={this.HandleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="Title" value={Title} onChange={this.HandleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <input type="text" name="Body" value={Body} onChange={this.HandleChange} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;