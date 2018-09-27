import React, { Component } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageList from './components/ImageList';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      url: null
    }

    this.getImgUrl = this.getImgUrl.bind(this);
  }
  getImgUrl(url){
    this.setState({
      url: url
    })
  }


  render() {
    return (
      <div className="App">
        <ImageUpload imgUrl={this.getImgUrl} />
        <ImageList url={this.state.url} />
      </div>
    );
  }
}

export default App;
