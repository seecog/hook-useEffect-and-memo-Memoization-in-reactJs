import React, {Component} from 'react';
import Average from './Average.js';
import Cities from './curd-cities.js';

class Home extends Component{
    constructor(){
        super();

        this.state={
        a:"",b:"",c:""
        }

    }

    addNumbers = () =>{

        this.setState({
            c: parseInt(this.state.a)+parseInt(this.state.b)
            })

    }

    render(){
        return(
            <div>
                

               <p><input type="text" placeholder="Enter First Value"  onChange={(evt) => this.setState({a:evt.target.value})} value={this.state.a}/></p>

               <p><input type="text" placeholder="Enter Second Value" onChange={(evt) => this.setState({b:evt.target.value})} value={this.state.b}/></p>

               <p><button onClick={this.addNumbers}>Add Numbers</button></p>
                <p>The Addition of Above two numbers is: {this.state.c}</p>
                <hr/>
                <Average/>
                <hr/>
                <Cities/>
            </div>
        )
    }
}

export default Home;