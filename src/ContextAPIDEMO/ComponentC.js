import React from 'react'
import { ComponentE } from './ComponentE'

export class ComponentC extends React.Component{
    render(){
        return(
            <div>
               <ComponentE/>
            </div>
        )
    }
}