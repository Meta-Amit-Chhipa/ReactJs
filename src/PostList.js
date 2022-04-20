import React from "react";
import { MdOutlineMessage } from 'react-icons/md';
function PostList(props) {
    return (
        <div>
            <div className="Title">
                <h3>Comment Box  </h3>
            </div>
            <div className="Tab">
                {
                    props.data.map((button, i) => (
                        <button key={button.id} className="tablinks" onClick={() => props.ClickedTab(i)}>
                            Comment {button.id}</button>
                    ))
                }
            </div>
            <div className="TabContent">
                {
                    props.CurrTab !== -1 &&
                    <>
                        <div className="TitleIcons">
                            <MdOutlineMessage style={{ color: 'red', marginLeft: '20px' }} />
                        </div>
                        <h4>{props.data[props.CurrTab].title}</h4>
                    </>
                }
            </div>
        </div>
    )
}

export default PostList
