
import { Component } from "react";
import CustomImageApi from "./customImageapi";
import "./fetchstyle.css"

class FetchExample extends Component{
    state={
        product : [],
        loader : true,
        Error : false
    }
    Fetchproduct=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>this.setState({product:data ,loader:false}))
    }
    render(){
        return (
            <div>
            <button onClick={this.Fetchproduct}>  click Here To Get Data </button>
            {
                this.state.loader ? <h2> Loading Data   </h2> :
                 <> 
                 <div className="fecthmain">
                 {this.state.product.map((each)=>{
                    return(
                        <>
                        <div className="insidediv">
                        <h2> {each.title}</h2>
                        <h2> {each.price}</h2>
                        <p> {each.description}</p>
                        <p> {each.category}</p>
                        <CustomImageApi source = {each.image} alt="image"  height={250} width={250}/>
                        </div>
                        
                        </>
                    )
                 })}
                 </div>
                 </> 
                
            }
        </div>
        )
        
    }
}
export default FetchExample;