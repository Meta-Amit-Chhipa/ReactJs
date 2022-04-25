import './App.css';
import React from 'react';
// import MemoHook from './ReactHooks/MemoHooks';
// import ReferenceHook from './ReactHooks/ReferenceHook';
// import FetchData from './ReactHooks/USE-REDUCER/FetchData';
// import ComponentC from './ReactHooks/ContextHooks/ComponentC';
// import ReducerHooks from './ReactHooks/USE-REDUCER/ReducerHooks';
import Effect1 from './ReactHooks/Effect1';
// import EffectHooks from './ReactHooks/EffectHooks';
// import StateHook from './ReactHooks/StateHook';


export const UserContext=React.createContext()
function App() {
  // const arr=[1,2,3,4]
  return (
    <div className="App">
      {/* <StateHook/> */}
      {/* <EffectHooks/> */}
      <Effect1/>
      {/* <UserContext.Provider value={arr}>
        <ComponentC  />
      </UserContext.Provider> */}
      {/*  <ReducerHooks/> */}
      {/* <FetchData/> */}
      {/* <ReferenceHook/> */}
      {/* <MemoHook/> */}
    </div>
  );
}

export default App;
