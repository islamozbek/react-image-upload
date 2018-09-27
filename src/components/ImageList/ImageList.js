import React, { Component } from 'react';
import './style.css';

export default class ImageList extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgList: []
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.url !== prevProps.url){
            let imgList = this.state.imgList;
            imgList.push(
                <img src={this.props.url} />
            );
            this.setState({imgList: imgList})
        }
    }

    render(){
        return(
            <div>
                <h4>Images Preview</h4>
                {this.state.imgList.length > 0 ?
                    <div className="img-list">
                        {this.state.imgList}
                    </div>
                : ''}
            </div>
        )
    }
}