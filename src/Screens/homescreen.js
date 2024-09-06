import { useContext } from "react";
import Navbarexample from "../Components/navbar/navbar";
import { DataContext } from "../Navigation/navigation";
import RecipeDrowpDown from "../Components/recipe-finder/recipe_Finder";

const HomeScreen=()=>{
    
    const {username,darkMode, ChangeName}=useContext(DataContext)
    const NameChanger=()=>{
        ChangeName("Samson")
    }
    return(
        <>
        <Navbarexample />
        <h1> Welcome {username} </h1>
        <h1> This is Home  Page </h1>
        <button onClick={NameChanger}> change Name  </button> 
        <RecipeDrowpDown/>
        </>
    );
};

export default HomeScreen;

