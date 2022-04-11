import React  from "react";
import Blogs from "./Blogs";


function Post(props){
  let item=[
    {
       id:"01",
       title:'Post Title 1',
       desc:'Post Description 1'
    },
    {
      id:"02",
      title:'Post Title 2',
      desc:'Post Description 2'
   },
   {
    id:"03",
    title:'Post Title 3',
    desc:'Post Description 3'
 },
 {
  id:"04",
  title:'Post Title 4',
  desc:'Post Description 4'
},
  ]
      return(
          <div className="container ItemBox">
             <h5>Blogs Post</h5>
             <Blogs item={item}/>
          </div>
      )
}

export default Post;
