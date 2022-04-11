import React from "react";
import {FaRegThumbsUp,FaUserCircle} from "react-icons/fa";

function Blogs(props){
    return(
        <div>
            {
                props.item.map(Number=>(
                   <div className="container ">
                   <div className="Avatar">
                  <FaUserCircle style={{fontSize: '35px',color:'gray'}}/>
                   </div>
                 <h3 className="card-title">{Number.title}</h3>
                 <p className="card-detail">{Number.desc}</p>
                 <div className="Icon">
                 <FaRegThumbsUp style={{color: 'blue', fontSize: '20px'}}/>
                </div>
               </div>
                 ))
              }
        </div>
    )
}

export default Blogs;
