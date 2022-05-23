import React from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"


const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
function Details(props) {
    const { id } = useParams()
    return (
        <div className="container">
            <br /><br />
            {
                props.todos[id].text !== "" && props.todos[id].desc !== "" ?
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            {props.todos[id].item}
                        </div>
                        <div className="card-body">
                            <p>{props.todos[id].description}</p>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default connect(mapStateToProps)(Details)
