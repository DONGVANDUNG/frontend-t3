import React,{Component} from 'react';
class Product extends Component{
    addToCart=()=>{
        console.log(this.refs.name.value);
    }
    render() {
        return (
            <div>
                 <h1 className="name">{this.props.name}</h1>
                 <img alt={this.props} src={this.props.img}/>
                 <input type="text" ref="name"/>
                 <button type="submit" onClick={this.addToCart}>Mua ngay</button>
            </div>
        )
    }
}
export default Product;