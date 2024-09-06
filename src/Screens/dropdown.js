import axios from "axios";
import { useEffect, useState } from "react";


const Dropdown=()=>{
    const [country,setcountry]=useState([])
    useEffect(()=>{
         CountryDeatils()
    },[])

    const CountryDeatils=async()=>{
         try{
            const CountryData= await axios.get("https://restcountries.com/v3.1/all");
            console.log(CountryData)
            setcountry(CountryData)
         }
         catch(error){
            console.log(error)
         }
    }
    return(

        <>
        <h1> Hello </h1>  
        </>
    )
}

export default Dropdown;