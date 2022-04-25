import React from 'react'
import useDataFetch from './useDataFetch'
export default function Example1(){
    const [Data]=useDataFetch("https://jsonplaceholder.typicode.com/posts")
    return(
        <div>
            {
                Data.map((Name)=>(
                    <div>{Name.id}--{Name.title}</div>
                ))
            }
        </div>
    )
}