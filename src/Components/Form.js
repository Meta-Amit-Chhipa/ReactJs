import React from 'react'
import './ComponentStyle.css'
import ProfilePage from './Profile';
export class Form extends React.Component{
       constructor(props){
           super(props)
           this.state={
               Name:'',
               Email:'',
               Phone:'',
               Age:'',
               Gander:'',
               Image:'',
               Address:'',
               ModalShow:false,
               Errors:{
                   Name:'',
                   Email:'',
                   Phone:'',
                   Age:'',
                   Gander:'',
                   Image:'',
                   Address:''
               }
           }
           this.ImageRef=React.createRef();
       }
    HandleChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    ValidateEmail(Email){
        // eslint-disable-next-line no-useless-escape
        const reg = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if(reg.test(Email))
          return true
        else
        return false
    }
    FormValid(){
        let errors={}
        let isValid=true
        if(!this.state.Name)
        {
            isValid=false
            errors['Name']="Please Enter Name"
        } 
        if(!this.state.Email)
        {
            isValid=false
            errors['Email']='Please Enter Email'
        }  
        else if(!this.ValidateEmail(this.state.Email))
        {
            isValid=false
            errors['Email']="Please Enter Valid Email";
        } 
        if(!this.state.Phone)
        {
            isValid=false
            errors['Phone']="Please Enter Mobile Number";
        }
        else
        {
            if(this.state.Phone.length<10)
            {
                isValid=false
                errors['Phone']="Invalid Phone Number"
            }
        }
        if(!this.state.Age)
        {
            isValid=false
            errors['Age']="Please Enter Age";
        }
        if(!this.state.Gander)
        {
            isValid=false
            errors['Gander']="Please Select Gander";
        }
        if(!this.state.Image)
        {
            isValid=false
            errors['Image']="Please Select Image";
        }if(!this.state.Address)
        {
            isValid=false
            errors['Address']="Please Enter Address";
        }
        this.setState({
            Errors:errors
        })
        return isValid;
    }
    HandleImageChange=(event)=>{
        if (event.target.files[0]) {
            this.setState({
              Image: URL.createObjectURL(event.target.files[0])
            });
          }
    }
       FormSubmit=(event)=>
        {
           event.preventDefault()
           if(this.FormValid())
           {
            this.setState({
                ModalShow:true,
            })
           }   
        }
    handleClose=()=>{
        this.setState({
            ModalShow:false
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
            Address:'',
           })
          this.ImageRef.current.value="";
       }
       render(){
           const Userdata={
               UserName:this.state.Name,
               UserEmail:this.state.Email,
               UserPhone:this.state.Phone,
               UserAge:this.state.Age,
               UserGander:this.state.Gander,
               UserImage:this.state.Image,
               UserAddress:this.state.Address
           }
           return(
               <>
                <div className="container">
                <form onSubmit={this.FormSubmit} method="get">
                <div className="form-group">
                <label>Name</label><br/>
                <input type="text" className="form-control" name='Name' value={this.state.Name} onChange={this.HandleChange}/>
                <span className="ErrorMessage">{this.state.Errors.Name}</span>
                </div>
                <div className="form-group">
                <label>Email</label><br/>
                <input type="email" className="form-control" name='Email' value={this.state.Email} onChange={this.HandleChange}/>
                <span className="ErrorMessage">{this.state.Errors.Email}</span>
                </div>
                <div className="form-group">
                    <label>Phone:</label><br/>
                    <input type="tel" className="form-control" name='Phone' maxLength="10" value={this.state.Phone} onChange={this.HandleChange}/>
                    <span className="ErrorMessage">{this.state.Errors.Phone}</span>
                </div>
                <div className="form-group">
                    <label>Age</label><br/>
                    <input type="number" className="form-control" name='Age' min="1" max="50" value={this.state.Age} onChange={this.HandleChange}/>
                    <span className="ErrorMessage">{this.state.Errors.Age}</span>
                </div>
                <div className="form-group">
                    <label>Gander</label><br/>
                    <select  name='Gander' onChange={this.HandleChange} value={this.state.Gander} className="form-control ">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <span className="ErrorMessage">{this.state.Errors.Gander}</span>
                </div>
                <div className="form-group">
                <label >Upload Your Image</label>
                 <input type="file" className="form-control-file" id="exampleFormControlFile1" name='Image'  onChange={this.HandleImageChange}  ref={this.ImageRef}/>
                 <span className="ErrorMessage">{this.state.Errors.Image}</span>
                 </div>
                <div className="form-group">
                    <label>Address:</label><br/>
                    <textarea className="form-control" rows="6" cols="30" name='Address' value={this.state.Address} onChange={this.HandleChange}></textarea>
                    <span className="ErrorMessage">{this.state.Errors.Address}</span>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-success" disabled={this.state.isDisabled}>Submit</button>
                </div>
                <div className="form-group">
                <button type="button" onClick={this.ClearForm} className="btn btn-secondary">Clear</button>
                </div>
            </form>
            <ProfilePage Userdata={Userdata} ModalShow={this.state.ModalShow} Hide={this.handleClose}/>
         </div>
      </>
        )
       }
}
