import React, { Component } from 'react';
import './style.css';

export default class ImageUpload extends Component{

    constructor(props){
        super(props);
        this.state = {
            file: null,
            warning: false,
            extensions: ['image/png', 'image/jpg', 'image/gif', 'image/jpeg', 'image/bmp', 'image/tiff'] // can be more
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        let file = e.target.files[0];
        if(this.state.extensions.indexOf(file.type) !== -1){
            this.setState({
                file: file,
                warning: false
            });
        }else{
            this.setState({warning: true})
        }
        
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <input type="file" onChange={this.handleChange} />
                    </div>
                    <div className="form-control">
                        <input type="submit" disabled={this.state.warning} value="Upload Me" />
                    </div>
                </form>
                {this.state.warning ?
                    <div className="alert-warning">
                        Please use image (Ex. {this.state.extensions.join(', ')})
                    </div>
                : ''}
            </div>
        );
    }
}