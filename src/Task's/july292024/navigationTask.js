import { BrowserRouter, Route, Routes } from "react-router-dom"
import RecipeHomeScreen from "./RecipeHomepage";
import RecipeScreen from "./RecipeList";
import RegistationScreen from "./Registation";
import LocationsScreen from "./locations";

const NavigationTask=()=>{
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeHomeScreen/>} />
        <Route path="/Recipe" element={<RecipeScreen/>} />
        <Route path="/location" element={<LocationsScreen/>}/>
        <Route path="/Register" element={<RegistationScreen/>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default NavigationTask;