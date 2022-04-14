import './App.css';
import { FRParent } from './ReferenceDemo/FRParent';
// import { Reference } from './ReferenceDemo/Reference';
function App() {
  return (
    <div className="App">
    {/* basic Rference */}
      {/* <Reference/> */}
    {/* Forwarding Reference*/}
        <FRParent/>
    </div>
  );
}

export default App;
