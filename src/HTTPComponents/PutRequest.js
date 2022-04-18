import React from "react";
import axios  from "axios";

class PutRequest extends React.Component{
    constructor() {
        super()
        this.state = {
            Post: [],
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
            })
    }
    UpdateData(){
        const data={
            "userId":"222",
            "id":"12",
            "title":"Name",
            "body":"My Name"
        }
        axios.put("https://jsonplaceholder.typicode.com/posts/1",data)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log("Wrong")
        })
    }
    render(){
        return(
            <div>
                <button className="btn btn-success" onClick={this.UpdateData}>UpdateData</button>
            </div>
        )
    }
}

export default PutRequest;