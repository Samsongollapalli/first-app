import { Component } from "react";


class SubscribeComponent extends Component {


    state={
        Isstate:true  ,
        clickButton1: "Subscribe",
        clickButton2:"Subscribed"

    }
     HandleClick=()=>{
 console.log("Clicked")// To check for clicking apply or not 

 this.setState({
 Isstate : !this.state.Isstate,

 },()=>{})
     }
    render(){
        return (
<>
<button onClick={this.HandleClick}> {this.state.Isstate?this.state.clickButton1:this.state.clickButton2} </button>
{this.state.Isstate?<> <h2> Please Click here To subscribe </h2> </>: <> <h2> Thanks for Subscribing </h2> </> }
</>
        )
    }
}


// First class Component then 
// passes the state value n the state 
// then add event to buttto  and write the function to handlle the event then to apply we need setstate to apply the event 
export default SubscribeComponent;