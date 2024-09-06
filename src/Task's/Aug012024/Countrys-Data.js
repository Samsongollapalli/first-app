import axios from "axios";
import { useEffect, useState } from "react";
import "./countrylist.css"


const CountryApi=()=>{
    const [CountryList,SetCountryList]=useState([])
    const [DataOfCountry,SetDataOfCountry] = useState({})
    useEffect(()=>{
        CountrysData();
    },[])

    const CountrysData=async()=>{
        const  {data} = await axios.get("https://restcountries.com/v3.1/all")
        console.log(data)
        SetCountryList(data)
     }

   const SubmitHandler=(event)=>{
       const SelectedCountry = event.target.value;
       CountryDetails(SelectedCountry)
       console.log(SelectedCountry)
   }

//    const CountryDetails= async () => {
//     const { data } =  await axios.get("https://restcountries.com/v3.1/all")
//     console.log(data)
//     SetDataOfCountry(CountryDetails);
//    }

const CountryDetails = async (countryName) => {
    const countryData = CountryList.find(
      (country) => country.name.common === countryName
    );
    console.log(countryData);
    SetDataOfCountry(countryData);
  };

    return(
        <>
        <div className="countryList">
        <h1> Country Api </h1>
        {
            CountryList.length>0 ? 
            
            <select onChange={SubmitHandler}> 
                  {
                    CountryList.map((eachList=> (
                        <option value={eachList.name.common}> {eachList.name.common} </option>
                    )))
                  }
            </select>
         
            
            : <> </>
        }  

        {
            Object.keys(DataOfCountry).length > 0 && (
                <div> 
                    <h4>  Country Name : { DataOfCountry.name.common} </h4>
                    <h4> Country Official Name: { DataOfCountry.name.official }</h4>
                </div>
            )
        }
        </div>
        </>
    )
}

export default CountryApi;