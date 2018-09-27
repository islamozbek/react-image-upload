import React, { Component } from 'react';
import './style.css';

export default class ImageUpload extends Component{

    constructor(props){
        super(props);
        this.state = {file: null}

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            file: e.target.files[0] 
        });
    }

    onSubmit(e){
        e.preventDefault();
        let reader = new FileReader(),
            file = this.state.file,
            self = this;

       reader.onloadend = function () {
            self.props.imgUrl(reader.result);
       }

       if (file) {
           reader.readAsDataURL(file);
       }

       // upload API varsa burada çağırılıp dosyalar klasörlere kaydedilebilir.

    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-control">
                    <input type="file" onChange={this.handleChange} />
                </div>
                <div className="form-control">
                    <input type="submit" value="Upload Me" />
                </div>
            </form>
        );
    }
}