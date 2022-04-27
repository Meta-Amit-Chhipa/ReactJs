const initialState={
    NumOfCake:10
}

const CakeReducers=(state=initialState,actions)=>{
    switch(actions.type){
        case 'BUY_CAKE':
            return{
                ...state,
                NumOfCake:state.NumOfCake-1
            }
        default:
            return state
    }
}

export default CakeReducers;