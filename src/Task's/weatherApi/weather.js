import axios from "axios";
import { useRef, useState } from "react";
import "./weather.css"


const WeatherApi=()=>{
    const search = useRef();
    const [weatherData,setweathersData]=useState({})
    const [userdata,setuserdata] = useState(false)
    const [listOfData,setlistOfData] = useState([])
    const FetchApi=async(query)=>{
        try{
            const {data,status} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e28335bda2b2839cdb71618cb3801a3e&units=metric`)
            console.log(data)
            if(status===200){
                setweathersData(data)
            }
        }
        catch{
            console.log("error")
            setweathersData([])
        } 
    }
   const submitHandler=(event)=>{
  event.preventDefault();
  const EnteredValue = search.current.value;
    if (EnteredValue.length > 0) {
        FetchApi(EnteredValue);
       const displayDetails=()=>{
        if(!listOfData.includes(EnteredValue)){
            return[...listOfData,EnteredValue]
        }
        else{
            alert("error")
            return listOfData
        }
       }
       setlistOfData(displayDetails)
    }
    else{
        alert("please enter city Name Properly")
    }
   }
    return(
        <>
        <div className="WeatherList">
            <form  onSubmit={submitHandler}>
                <label htmlFor="search"> </label>
                <input type="search"  id="search" ref={search} placeholder="search City"/>
                <button> Search </button>
            </form>
            {userdata ? (
        <h3>Loading...</h3>
      ) : Object.keys(weatherData).length === 0 ? (
        <h3> Please Search The City </h3>
      ) : (
        <div className="dataofcity">
          <h4> City: {weatherData.name}</h4>
          <h4> Id : {weatherData.id}</h4>
          <h4> Cordiantes lat : {weatherData.coord.lat}</h4>
          <h4> Cordiantes lon : {weatherData.coord.lon}</h4>
          <h4> Country  : {weatherData.sys.country}</h4>
          <h4> Feels Liks  : {weatherData.main.feels_like}</h4>
          <h4> ground Level : {weatherData.main.grnd_level}</h4>
          <h4> Humidity : {weatherData.main.humidity}</h4>
          <h4> pressure :{weatherData.main.pressure}</h4>
          <h4> sea level : {weatherData.main.sea_level}</h4>
          <h4> temperature : {weatherData.main.temp} </h4>
          <h4> maximum temperature: {weatherData.main.temp_max} </h4>
          <h4> minimum temperature : {weatherData.main.temp_min} </h4>
        </div>
      )}
      </div>
    </>
  );
}

export default WeatherApi;