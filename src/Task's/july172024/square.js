import { Component } from "react";
import "./square_style.css"

class Squarelist extends Component{
   state={
    SquareArray :[],
   }
   SquareHandler=()=>{
    const newstate = [...this.state.SquareArray,1]
    this.setState({
        SquareArray:newstate
    })
   }
    render() {
        return (
    <>
    <h1> Sqaure Component </h1>
    <button onClick={this.SquareHandler}> Click Here </button>
    {  
    <>
        {this.state.SquareArray.map((each,index)=>{
            return(
               <div className={(index+2)%2===0 ? 
                "square_odd" : "sqaure_even"
               }> 

               <h1> {index+1} </h1> 
               </div>
            )
        })}
        </>
    }
    </>
        )
    }
}

export default Squarelist;