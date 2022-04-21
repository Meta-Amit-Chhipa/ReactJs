import React from "react";

function Details(props) {
    return (
        <div className="container">
            <br /><br />
            {
                props.items.map(Number => (
                    <div>
                        {
                            Number.title !== "" && Number.description !== "" ?
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title float-left">
                                            <span style={{ textDecoration: Number.completed ? "line-through" : "" }}>
                                                {Number.title}
                                            </span></h5>
                                        <p className="card-text">
                                            <span style={{ textDecoration: Number.completed ? "line-through" : "" }}>
                                                {Number.description}
                                            </span></p>
                                        </div>
                                </div> : null
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default Details;
