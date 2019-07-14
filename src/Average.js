import React, {Component} from 'react';
class Average extends Component{
    constructor(){
        super()
        this.state = {
            eng: "",
            math: "",
            sci: "",
            hin: "",
            soc: "",
        result:""
        }
    }

    avg = () =>{

        this.setState({
            result : parseInt(this.state.eng) + parseInt(this.state.math) + parseInt(this.state.sci) + parseInt(this.state.hin) + parseInt(this.state.soc),
        })
    }

    render(){
        return(
            <div>
                <h1>Average of Students</h1>

                <p>English: <input type="text" value={this.state.eng} onChange={(evt) => this.setState({eng: evt.target.value})}/></p>
                <p>Maths: <input type="text" value={this.state.math} onChange={(evt) => this.setState({math: evt.target.value})}/></p>
                <p>Science  : <input type="text" value={this.state.sci} onChange={(evt) => this.setState({sci: evt.target.value})}/></p>
                <p>Hindi: <input type="text" value={this.state.hin} onChange={(evt) => this.setState({hin: evt.target.value})}/></p>
                <p>Social: <input type="text" value={this.state.soc} onChange={(evt) => this.setState({soc: evt.target.value})}/></p>

                <button onClick={this.avg}>Average</button>
                <p>The Average Of total 5 subjects is :{this.state.result}</p>
            </div>
        )

    }
}
export default Average;