import { Component } from "react"
import axios from "axios"

class CountryNames extends Component {
    state={
        CountryNames :[],
        loader: true,
        error:false
    }

    CounterNamesHanding=async()=>{
    try{
const{status,data} = await axios.get("https://restcountries.com/v3.1/all")
 if(status===200){
   this.setstate({
     CountryNames : data.names,
     loader : false
   })
 }
 }catch{
    this.setState({
        error:true,
        loader:false
    })
 }
    }

    componentDidMount(){
        this.fetchCountryNames();
    }
    render(){
        
        return (
            <div>
        <h1> Hi </h1>
            {
             this.state.loader ? <h1> Countery List Loading </h1> : 
             <>
             {
                this.state.CountryList.map((names)=>{
                    const {official} = names
                    return(
                    <h2 key={names}> {official}</h2>
                )})
             }
             </>
            }
          </div>  
        )
    }
}

export default CountryNames;