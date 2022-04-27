import React,{useState} from 'react'
import Modal from './Modal'

const Other_style={
    backgroundColor:'red',
    color:'white',
    padding:'10px 10px',
    margin:'10px 10px'
}

const Modal_style={
    padding:'10px 10px',
    margin:'10px 10px'
}

const Button_style={
    padding:'10px 10px',
    margin:'8px 10px',
    border:'2px solid red'
}
export default function PortalDemo(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <>
          <div >
              <button onClick={()=>setIsOpen(true)}>Open Modal</button>
              <Modal open={isOpen}>
                <p  style={Modal_style}>  This is Modal   <button onClick={()=>setIsOpen(false)} style={Button_style}>Close</button></p>
              </Modal>
          </div>
          <div style={Other_style}>
              Other Content
          </div>
        </>
    )
}