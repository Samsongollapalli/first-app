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
console.log(status)
 if(status===200){
   this.setState({
     CountryNames : data,
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
        this.CounterNamesHanding();
    }
    render(){
        
        return (
            <div>
        <h1> Hi </h1>
            {
             this.state.loader ? <h1> Countery List Loading </h1> : 
             <>
             {
                this.state.CountryNames.map((country)=>{
                    const {official,common} = country.name
                    return(
                        <div key={country}>
                    <h2 > {official}</h2>
                    <p> {common}</p>
                    </div>
                )})
             }
             </>
            }
          </div>  
        )
    }
}

export default CountryNames;