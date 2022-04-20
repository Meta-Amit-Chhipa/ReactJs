import React from "react";

function PostDetail(props){
    return(
        <div className="TabContent">
            <p>{props.data[props.CurrTab].desc}</p>
        </div>
    )
}
export default PostDetail;
