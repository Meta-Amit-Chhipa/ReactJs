import './App.css';
import { ErrorBoundaries } from './ErrorBoundaries/ErrorBoundaries';
import ErrorDemo from './ErrorBoundaries/ErrorDemo';
function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
        <ErrorDemo Name="Amit" />
      </ErrorBoundaries>
      <ErrorBoundaries>
        {/* Show For Error */}
        <ErrorDemo Name="Abhay" />
      </ErrorBoundaries>
    </div>
  );
}

export default App;
