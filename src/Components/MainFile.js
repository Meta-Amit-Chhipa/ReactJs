import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Details';
import { Navigation } from './Navigation';
import store from './store';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function MainFile() {
  return (
    <div>
      <Provider store={store}>
        <Router>
            <Navigation/>
          <Routes>
            <Route exact path="/" element={<TodoInput/>}/>
            <Route exact path="/list" element={<TodoList/>} />
            <Route path="/Details/:id" element={<Details/>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default MainFile
