import React, { Component } from 'react';
class SettingSize extends Component {
    setFontSize(value){
        this.props.onRecievFontSize(value);
    }
    render() {
        return (
            <div className="font-size">
                <p className="title-font-size">Size: {this.props.fontsize}px</p>
                <div className="button">
                    <button type="submit" className="btn"
                     onClick={()=>this.setFontSize(3)}
                    >Tăng</button>
                    <button type="submit" className="btn"
                     onClick={()=>this.setFontSize(-2)} 
                    >Giảm</button>
                </div>
            </div>
        )
    }
}
export default SettingSize;