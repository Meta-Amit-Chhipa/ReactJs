import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";

export default function Effect1(){
    const [Post,SetPost]=useState({})
    const [id,SetId]=useState(1)
    const [idFromButton,SetidFromButton]=useState(1)

    const HandleClick=()=>{
        SetidFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            console.log(res)
            SetPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [idFromButton])
    return(
        <div>
            <input type="text" value={id} onChange={E=>SetId(E.target.value)} />
            <button type="button" onClick={HandleClick}>FetchTitle</button>
            <p>{Post.title}</p>
        </div>
    )
}