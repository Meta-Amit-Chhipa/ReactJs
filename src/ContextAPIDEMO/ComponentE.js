import React from 'react'
import { ComponentF } from './ComponentF'
import UserContext from './UseContext'

export class ComponentE extends React.Component{
    render(){
        return(
            <div>
                Component E {this.context}
               <ComponentF/>
            </div>
        )
    }
}

ComponentE.contextType=UserContext;