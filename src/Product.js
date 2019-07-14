import React, {Component} from 'react';
class Product extends Component{
    render(){
        return(
            <div>
                 <img src={this.props.pic} alt="blue print for product images"/>
                 <p>Name: {this.props.name}</p>
                 <p>Cost: {this.props.cost}</p>
            </div>
        )
    }
}

export default Product;