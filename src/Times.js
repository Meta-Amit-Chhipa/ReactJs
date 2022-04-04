import React from 'react'
export class DigitalClock extends React.Component {
  constructor(){
    super()
    this.state={
      time:null
    }
  }
   
   componentDidMount() {
       setInterval(() => {
           this.setState({
             time:new Date().toLocaleTimeString()
            })
          }, 1000)
      }
   render() {
           return (
           <div className="StyleTime">
              <p>{this.state.time} </p>
           </div>
            );
    }
 }