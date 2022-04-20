
// Composition in Reactjs


import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <SideBar data={"This is SideBar Component"}>
                    <Content />
                </SideBar>
            </div>
        )
    }
}

function SideBar(props) {
    return <div>
        {props.data}
        {props.children}
    </div>
}

function Content() {
    return <div>
        <h1>This is SideBar</h1>
        <p>This is Peragraph for SideBar</p>
    </div>
}