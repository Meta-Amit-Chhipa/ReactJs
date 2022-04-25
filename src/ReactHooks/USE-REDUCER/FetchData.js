import React,{useReducer,useEffect} from "react";
import axios from 'axios';

const initialState={
    Loading:true,
    Error:'',
    Post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                Loading:false,
                Post:action.PayLoad,
                Error:''
            }
        case 'FETCH_ERROR':
            return{
                Loading:false,
                Post:{},
                Error:'Somthing Went Wrong'
            }
        default:
            return state
    }
}
export default function FetchData(){
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS',PayLoad:res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    })
    return(
        <div>
            {state.Loading ? 'Loading....':state.Post.title}
            {state.Error ? state.err : null}
        </div>
    )
}