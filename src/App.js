import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Deatils from './Components/Details';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import * as uuid from "uuid";
import React from 'react';
import { Navigation } from './Components/Navigation';
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      id:uuid.v4(),
      showItem:"all",
      items:[],
      title:'',
      description:''
    }
  }
  HandleChange=(event)=>{
    this.setState({
        title:event.target.value
    })
  }
  HandleDescription=(event)=>{
    this.setState({
      description:event.target.value
    })
  }
  HandleSubmit=(event)=>{
    event.preventDefault()
    const NewItem={
        id:this.state.id,
        title:this.state.title,
        description:this.state.description,
        completed:false
    }
    const UpdateItems=[...this.state.items,NewItem];
    this.setState({
        id:uuid.v4(),
        items:UpdateItems,
        title:'',
        description:''
    })
  }
  HandleDelete=(id)=>{
      const FilterItems=this.state.items.filter(item=>item.id!==id)
        this.setState({
            items:FilterItems
    })
  }
  MarkItem=(id,completed)=>{
     const MarkedItem=this.state.items.map(item=>{
       item.id===id && (item.completed=!item.completed)
       return item
     })
     this.setState({
       items:MarkedItem
     })
  }
  UpdateShowItem=(Name)=>{
    this.setState({
      showItem:Name
    });
  };
  render(){
    let FinalTodo=[]
    if(this.state.showItem==="all")
       FinalTodo=this.state.items
    else if(this.state.showItem==="Active"){
      FinalTodo = this.state.items.filter(item => !item.completed);
		} else if (this.state.showItem === "done") {
			FinalTodo = this.state.items.filter(item => item.completed);			
		}
    else
      FinalTodo=this.state.items
    return (
      <>
      <div className="App">
            <Router>
              <Navigation/>
              <Routes>
                <Route exact path="/" element={<TodoForm title={this.state.title} Submit={this.HandleSubmit} InputChange={this.HandleChange} Description={this.state.description} DescriptionChange={this.HandleDescription} />}/>
                <Route exact path="/list" element={<TodoList  items={FinalTodo} deleteItem={this.HandleDelete} MarkItem={this.MarkItem} UpdateToShow={this.UpdateShowItem} />} />
                <Route exact path="/details" element={<Deatils items={this.state.items} deleteItem={this.HandleDelete} />}/>
              </Routes>
            </Router>
      </div>
      </>
    );
  }
}
