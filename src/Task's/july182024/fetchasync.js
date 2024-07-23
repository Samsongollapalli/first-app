const { Component } = require("react");


class FetchAsyncExample extends Component{
    state={
        products:[],
        loader:true,
        error: false
    }
    FetchAsync=async()=>{
        try{
        const response = await fetch("https://dummyjson.com/products");
        const finaldata = await response.json();
        this.setState({
            products:finaldata.products,
            loader:false
        });
        console.log(finaldata);
    } catch (error){
        this.setState({
            error:true
        })
    } finally {
        this.setState({
            loader:false
        })
    }
}
    render(){
        return(
            <div>
            
            <button onClick={this.FetchAsync}>  Click Here </button>
            {
              this.state.loader ? <h1> Please  wait </h1> : 
              <div>
              {this.state.products.map((each)=>{return(
                <>
                <h1 key={each.id}>{title}</h1>
                <p> {each.description}</p>
                </> )  
              })}
              </div> 
            }
            </div>
        )
    }
}

export default FetchAsyncExample;