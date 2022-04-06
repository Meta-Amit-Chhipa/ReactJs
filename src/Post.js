import React from 'react'
import { MdOutlineMessage} from 'react-icons/md';

export class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CurrTab:0,
            data:[
                {id:'1',title:'Comment 1 Title',desc:"Description of Comment 1"},
                {id:'2',title:'Comment 2 Title',desc:"Description of Comment 2"},
                {id:'3',title:'Comment 3 Title',desc:"Description of Comment 3"},
                {id:'4',title:'Comment 4 Title',desc:"Description of Comment 4"},
                {id:'5',title:'Comment 5 Title',desc:"Description of Comment 5"},
            ]
        }
        this.ClickedTab = this.ClickedTab.bind(this);
    }
    ClickedTab(CurrTab) {
        this.setState({ CurrTab });
      }
    
    render(){
        // const element = <FontAwesomeIcon icon="fa-solid fa-message-captions" />
        return(
            <div className="MainBox">
                <div className="title">
                <h3>Comment Box  </h3>
                </div>
                {/* <i class="fa-solid fa-message-captions"></i> */}
                <div className="tab">
                    {
                        this.state.data.map((button,i)=>(
                            <button key={button.id} className="tablinks" onClick={()=>this.ClickedTab(i)} className="btn">
                            Comment {button.id} </button>
                        ))
                    }
                </div>
                <div className="tabContent">
                    {
                        this.state.CurrTab!=-1 &&
                        <>
                         <div className="TitleIcons">
                         <MdOutlineMessage style={{color:'red',marginLeft:'20px'}}/>
                         </div>
                         <h3>{this.state.data[this.state.CurrTab].title}</h3>
                         <p>{this.state.data[this.state.CurrTab].desc}</p>
                        </>
                    }
                </div>
            </div>
        )
    }
}