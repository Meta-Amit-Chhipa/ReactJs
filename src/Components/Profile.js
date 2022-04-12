import React from 'react'
import { Button,Modal } from 'react-bootstrap';
import './ComponentStyle.css'
function ProfilePage(props){
    return(
        <Modal show={props.ModalShow} onHide={props.Hide}>
              <Modal.Header>
                 <Modal.Title className="center">
                   <img src={props.Userdata.UserImage} alt="Profile_Picture" className="rounded-circle"/>
                 </Modal.Title>
                </Modal.Header>
                <Modal.Body className="center">
                    <p><label>Name: {props.Userdata.UserName}</label></p>
                    <p><label>Email: {props.Userdata.UserEmail}</label></p>
                    <p><label>Mobile: {props.Userdata.UserPhone}</label></p>
                    <p><label>Age: {props.Userdata.UserAge}</label></p>
                    <p><label>Gander: {props.Userdata.UserGander}</label></p>
                    <p><label>Address: {props.Userdata.UserAddress}</label></p>
                </Modal.Body>
                 <Modal.Footer>
                <Button variant="secondary" onClick={props.Hide}>
                   Cancle
                </Button>
             </Modal.Footer>
        </Modal>
    )
}
export default ProfilePage;
