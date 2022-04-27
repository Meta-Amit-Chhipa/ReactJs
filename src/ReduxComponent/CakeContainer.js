import React from 'react'
import buyCake from '../Redux/Cakes/CakeActions'
import { connect } from 'react-redux'
function CakeContainer(props){
    return(
        <div>
            <h4>Number Of Cake {props.NumOfCake}</h4>
            <button onClick={props.buyCake}>BuyCake</button>
        </div>
    )
}


const mapToStateToProps=state=>{
    return{
        NumOfCake:state.NumOfCake
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapToStateToProps,mapDispatchToProps)(CakeContainer);