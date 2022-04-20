import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navigation from './CodeSplitting/Navigation';
// const MathFile = React.lazy(() => import('./CodeSplitting/Math'))
const Home = React.lazy(() => import('./CodeSplitting/Home'))
const About = React.lazy(() => import('./CodeSplitting/About'))
function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
