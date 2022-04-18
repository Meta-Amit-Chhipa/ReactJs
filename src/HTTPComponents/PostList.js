import React from 'react'
import axios from 'axios'

class PostList extends React.Component {
    constructor() {
        super()
        this.state = {
            Post: [],
            ErrorMsg: ''
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(responce => {
                this.setState({
                    Post: responce.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    ErrorMsg: 'Somthing Went Wrong'
                })
            })
    }
    render() {
        return (
            <div>
                List Of Post
                {
                    this.state.Post.length ?
                        this.state.Post.map(Number => (<div> {Number.id}-{Number.title}</div>)) : null
                }
                {this.state.ErrorMsg ? <div>{this.state.ErrorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList;