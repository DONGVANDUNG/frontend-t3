import React, { Component } from 'react';
class Result extends Component {
    setStyle(){
        return{
            color: this.props.elColor,
            fontSize : this.props.fontsize
        }
    }
    render() {
        return (
            <div className="result">
                    <p className="title">The input - color: {this.props.elColor} - fontsize : {this.props.fontsize}px  </p>
                    <input type="text" style={this.setStyle()} className="input-text" placeholder="Nội dung settting" />
                </div>
        )
    }
}
export default Result;