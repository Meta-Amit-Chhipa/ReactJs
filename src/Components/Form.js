import React from 'react'
import ProfilePage from './Profile'
import './ComponentStyle.css'
export class Form extends React.Component{
       constructor(props){
           super(props)
           this.state={
               Name:'',
               Email:'',
               Phone:'',
               Age:'',
               Gander:'',
               Image:null,
               Address:'',
               dataSend:false,
               Style:''
           }
       }
    HandleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }

    HandleImageChange=(event)=>{
        if (event.target.files[0]) {
            this.setState({
              Image: URL.createObjectURL(event.target.files[0])
            });
          }
    }
       FormSubmit=(event)=>{
           event.preventDefault()
           this.setState({
            dataSend:true,
            Style:'dataDisplay'
        })    
    }
       ClearForm=()=>{
           this.setState({
            Name:'',
            Email:'',
            Phone:'',
            Age:'',
            Gander:'',
            Image:"",
            Address:''
           })
       }
       render(){
           const Userdata={
            UserName:this.state.Name,
            UserEmail:this.state.Email,
            UserPhone:this.state.Phone,
            UserAge:this.state.Age,
            UserGander:this.state.Gander,
            ProfileImage:this.state.Image,
            UserAddress:this.state.Address,
           }
           return(
               <>
                <div className="container">
                <form onSubmit={this.FormSubmit} method="get" className={this.state.Style}>
                <div className="form-group">
                <label>Name</label><br/>
                <input type="text" className="form-control" name='Name' value={this.state.Name} onChange={this.HandleChange}/>
                </div>
                <div className="form-group">
                <label>Email</label><br/>
                <input type="email" className="form-control" name='Email' value={this.state.Email} onChange={this.HandleChange}/>
                </div>
                <div className="form-group">
                    <label>Phone:</label><br/>
                    <input type="tel" className="form-control" name='Phone' maxLength="10" value={this.state.Phone} onChange={this.HandleChange}/>
                </div>
                <div className="form-group">
                    <label>Age</label><br/>
                    <input type="number" className="form-control" name='Age' min="1" max="50" value={this.state.Age} onChange={this.HandleChange}/>
                </div>
                <div className="form-group">
                    <label>Gander</label><br/>
                    <select  name='Gander' onChange={this.HandleChange} value={this.state.Gander} className="form-control ">
                        <option>Select Anyone</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                <label >Upload Your Image</label>
                 <input type="file" className="form-control-file" id="exampleFormControlFile1" name='Image'  onChange={this.HandleImageChange} />
                 </div>
                <div className="form-group">
                    <label>Address:</label><br/>
                    <textarea className="form-control" rows="6" cols="30" name='Address' value={this.state.Address} onChange={this.HandleChange}></textarea>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-success">Submit</button>
                </div>
                <div className="form-group">
                <button type="button" onClick={this.ClearForm} className="btn btn-secondary">Clear</button>
                </div>
            </form>
            {
              this.state.dataSend && <ProfilePage Userdata={Userdata}/>
            }
            </div>
             </>
        )
       }
}