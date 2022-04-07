import React from 'react'
import './ComponentStyle.css'
const ProfilePage=({Userdata})=>{
    return(
        <div className="App">
            <div className="ImagePreview">
            <img src={Userdata.ProfileImage} className="rounded-circle"/>
            </div>
            <div className="UserDataPreview">
            <h5>UserName:{Userdata.UserName}</h5>
            <h5>UserEmail:{Userdata.UserEmail}</h5>
            <h5>Mobile:{Userdata.UserPhone}</h5>
            <h5>Age:{Userdata.UserAge}</h5>
            <h5>Gander:{Userdata.UserGander}</h5>
            <h5>User Address : {Userdata.UserAddress}</h5>
            </div>
        </div>
    )
}
export default ProfilePage;