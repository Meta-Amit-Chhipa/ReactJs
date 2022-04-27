import React from 'react'
import ReactDOM  from 'react-dom'

const Modal_style={
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'white',
    zIndex:1000
}

const Overlay_style={
    position:'fixed',
    top:'0',
    bottom:'0',
    right:'0',
    left:'0',
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000,
}
function Modal({open,children}) {  
 if(!open)
    return null
  return ReactDOM.createPortal(
    <>
    <div style={Overlay_style}></div>
    <div style={Modal_style}>
      {children}
    </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal
