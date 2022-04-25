import {useState,useEffect} from "react";
import axios from "axios";

const useDataFetch=(url)=>{
    const [Data,SetData]=useState([])

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            SetData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    return [Data]
}

export default useDataFetch;