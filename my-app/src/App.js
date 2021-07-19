
import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SettingSize from './components/SettingSize';
import Result from './components/Result'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            fontsize: 12
        }
    }
    setColor=(paramer)=> {
        this.setState ({
            color: paramer
        })
    }
    setFontSize=(paramer)=>{
      if(this.state.fontsize+paramer>=8&&this.state.fontsize+paramer<=36){
          this.setState({
              fontsize:this.state.fontsize+paramer
          })
      }   
}
reset=(value)=>{
    console.log(value);
}
    render() {
        return (
            <div className="text-color">
                <div className="container">
                    <ColorPicker
                        color={this.state.color}
                        onRecievColor={this.setColor}
                    >
                    </ColorPicker>
                    <SettingSize 
                    fontsize={this.state.fontsize}
                    onRecievFontSize={this.setFontSize}
                    ></SettingSize>
                </div>
                <Reset resetEle={this.reset}></Reset>
                <Result elColor={this.state.color}
                fontsize={this.state.fontsize}> </Result>
            </div>
        )
    }
}
export default App;