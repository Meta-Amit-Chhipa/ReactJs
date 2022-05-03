import React from 'react'
import { Link } from "react-router-dom";
export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"><Link to="/" className="nav-link">Create Todo</Link></li>
            <li className="nav-item"><Link to="list" className="nav-link">TodoList</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
