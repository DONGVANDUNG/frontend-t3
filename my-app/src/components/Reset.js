import React, { Component } from 'react';
class Reset extends Component {
    resetEle(){
        this.props.resetEle();
    }
    render() {
        return (
            <button className="btn-reset" onClick={()=>this.resetEle}
            >Reset</button>
        )
    }
}
export default Reset;