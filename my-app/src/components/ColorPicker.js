import React, { Component } from 'react';
class ColorPicker extends Component {
    constructor(props){
        super(props)
        this.state={
            color : ['red','blue','green','black','gray']
        }
    }
    showColor(EleCOlor){
      return {
          backgroundColor:EleCOlor
      }
    }
    setColor(ele){
       this.props.onRecievColor(ele)
    }
    render() {
        let elementColor=this.state.color.map((color,index)=>{
                  return <div key={index}
                  className={this.props.color===color ? 'active item-color': 'item-color'}
                  style={this.showColor(color)}
                  onClick={() => this.setColor(color)}></div>
        })
        return (
            <div className="color-picker">
                        <div className="banner">Color Picker</div>
                        <div className="box-color">
                            {elementColor}
                        </div>
                    </div>
        )
    }
}
export default ColorPicker;