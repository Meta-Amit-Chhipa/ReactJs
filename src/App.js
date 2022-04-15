import './App.css';
import { ComponentC } from './ContextAPIDEMO/ComponentC';
import { UserProvider } from './ContextAPIDEMO/UseContext';
function App() {
  return (
    <div className="App">
      <UserProvider value="Amit">
        <ComponentC />
      </UserProvider>
      {/*     For Default Value 
       <ComponentC/>
      */}
    </div>
  );
}

export default App;
