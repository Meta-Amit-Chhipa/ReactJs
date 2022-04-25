import React,{useContext} from 'react'
import { UserContext} from '../../App'

export default function ComponentF(){
    const user=useContext(UserContext)
    return(
        <div>
            <p>All Array of This</p>
            {
                user.map((Number)=>(
                    <div>{Number}</div>
                ))
            }
        </div>
    )
}