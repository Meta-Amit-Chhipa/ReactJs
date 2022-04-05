import React  from "react";
import Blogs from "./Blogs";

function Post(props){
      return(
          <div className="container ItemBox">
             <h5>Blogs Post</h5>
              <Blogs
                 title={props.item[0].title}
                 desc={props.item[0].desc}>
              </Blogs>
              <Blogs
                 title={props.item[1].title}
                 desc={props.item[1].desc}>
              </Blogs>
              <Blogs
                 title={props.item[2].title}
                 desc={props.item[2].desc}>
              </Blogs>
              <Blogs
                 title={props.item[3].title}
                 desc={props.item[3].desc}>
              </Blogs>
          </div>
      )
}

export default Post;