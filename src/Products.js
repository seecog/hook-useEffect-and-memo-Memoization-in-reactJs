import React, {Component} from 'react';
import Product from './Product';
class Products extends Component{
    render(){
        return(
            <div>
                 <h1>Products Page</h1>
                 <hr/>
                 <h2>Reusing Product Component</h2>
                 <Product name="Apple" cost="300" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vwNYwc9fWPqUwNCcT7NgZ8VNz7DfxSm8afAD-vVBePhALq18"/>
                 <hr/>
                 <Product name="Bannana" cost="200" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkJqzlv8I4_zBsLl7n2RICnwuqxB1sPXdagWN1ib-4NsEbMxa"/>
            </div>
        )
    }
}

export default Products;