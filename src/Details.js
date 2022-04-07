import React from "react";

function PostDetail(props){
    return(
        <div>
            <h3>{props.CurrentTitle}</h3>
           <p>{props.CurrentDescription}</p>
        </div>
    )
}

export default PostDetail;