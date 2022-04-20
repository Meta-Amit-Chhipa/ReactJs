import React from 'react'
import PostDetail from './Details';
import PostList from './PostList';

export class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrTab: 0,
            data: [
                { id: '1', title: 'Comment 1 Title', desc: "Description of Comment 1" },
                { id: '2', title: 'Comment 2 Title', desc: "Description of Comment 2" },
                { id: '3', title: 'Comment 3 Title', desc: "Description of Comment 3" },
                { id: '4', title: 'Comment 4 Title', desc: "Description of Comment 4" },
                { id: '5', title: 'Comment 5 Title', desc: "Description of Comment 5" },
            ]
        }
        this.ClickedTab = this.ClickedTab.bind(this);
    }
    ClickedTab(CurrTab) {
        this.setState({ CurrTab });
    }
    render() {
        return (
            <div  className="MainBox">
                <PostList data={this.state.data} CurrTab={this.state.CurrTab} ClickedTab={this.ClickedTab} />
                <PostDetail data={this.state.data} CurrTab={this.state.CurrTab} />
            </div>
        )
    }
}
