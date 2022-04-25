import React, { useState } from 'react'
// function StateHook(){
//     const initialValue=0;
//     const [count,setCount]=useState(initialValue);
//     const increment=()=>{
//         setCount(PrevsCount=>PrevsCount+1)
//     }
//     const decrement=()=>{
//         setCount(PrevsCount=>PrevsCount-1)
//     }
//     return(
//         <div>
//           <h4>Count {count} </h4>
//           <button onClick={()=>increment()}>+</button>
//           <button onClick={()=>decrement()}>-</button>
//         </div>
//     )
// }
// export default StateHook;


function StateHook(){
    const [Name,SetName]=useState({FirstName:'',LastName:''})
    return(
        <div>
            <form>
                <input type="text" value={Name.FirstName} onChange={(Event)=>SetName({...Name,FirstName:Event.target.value})}/>
                <input type="text" value={Name.LastName} onChange={(E)=>SetName({...Name,LastName:E.target.value})}/>
                <h2>Your First Name is {Name.FirstName} and LastName is {Name.LastName}</h2>
            </form>
        </div>
    )
}

export default StateHook;