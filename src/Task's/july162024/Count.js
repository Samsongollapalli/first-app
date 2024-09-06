import { Component } from "react";
import "./style.css"

class Countincreanddec extends Component{
    state = {
        count:0,
    }
IncrementHandler=()=>{
    this.setState(
        {
            count:this.state.count + 1,
        },()=>{}
    )
}

DecrementHandler=()=>{
    this.setState(
        {
            count:this.state.count - 1,
        },()=>{}
    )
}

ResetHandler=()=>{
    this.setState(
        {
            count:0,
        },()=>{}
    )
}

render(){
    return(
        <>
         <div className="main">
             <h1> {this.state.count} </h1>
             <button className="Incrementbutton" onClick={this.IncrementHandler}> Increment </button>
             <button className="Drebutton"  onClick={this.DecrementHandler}> Decrement </button>
             <button className="reset" onClick={this.ResetHandler}> Reset </button>
         </div>
        </>
    )
}
}

export default Countincreanddec;