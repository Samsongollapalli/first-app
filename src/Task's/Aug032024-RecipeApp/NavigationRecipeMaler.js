import { BrowserRouter, Route, Routes } from "react-router-dom"
import RecipeHomeScreen from "./HomeScreen";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import FavouriteList from "./Favroite";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import LocationScreen from "./Location";
import "./recipe.css"
import Viewrecipes from "./viewrecipes";


 export const RecipeContext = createContext();

const RecipeNavigation=()=>{


     const [recipesData,setrecipesData]=useState([]) 
     const [favouriteData , setfavouriteData] = useState([]) 
     const [viewrecipes,setviewrecipes] = useState({})

    useEffect(()=>{
        Fetchrecipes();
},[])
    const Fetchrecipes= async()=>{
        try{
            const { status,data } = await axios.get("https://dummyjson.com/recipes") 
            const newdata = data.recipes.map((eachData)=>{
                return {...eachData, exitsinfavourite:false}
            })

            console.log(newdata,"newdata");
            if(status === 200)
            setrecipesData(data)
            console.log(newdata)
        }
        catch (err){
            console.log("Error ")
        }
    }
      
    const AddFavouritelist=(newlist)=>{

        const recipeExist = favouriteData.find((eachfood)=>eachfood.id==newlist.id)

        // const newRecipesList = recipesData.map((eachRecipe) => {
        //     if (eachRecipe.id === newlist.id) {
        //       return { ...eachRecipe, existsInFavorite: true };
        //     } else {
        //       return eachRecipe;
        //     }
        //   }); 
        //   setrecipesData(newRecipesList);

        // const newRecipesList = recipesData.map((eachRecipe) =>
        //     eachRecipe.id === newlist.id
        //       ? { ...eachRecipe, existsInFavorite: true }
        //       : eachRecipe
        //   );

        if(recipeExist){
            toast.error("Already Exist In Favourite List");
        }
        else{
            setfavouriteData((AddedData) =>[...AddedData,newlist])
            toast.success("Added to Favourite")
        }        
    }
    const removeFavList=(id)=>{
        const RemoveThelist=favouriteData.filter(eachdish => eachdish.id!=id)
        setfavouriteData(RemoveThelist)

    }


    const viewrecipesdata=(eachlist)=>{
        setviewrecipes(eachlist)
        console.log(viewrecipes," eachofdata...")
    }
    return(
        <RecipeContext.Provider value={{
            recipesData: recipesData,
            favouriteData : favouriteData,
            AddFavouritelist: AddFavouritelist,
            removeFavList : removeFavList,
            viewrecipesdata : viewrecipesdata,
            viewrecipes : viewrecipes,

        }}>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={<RecipeHomeScreen/>}/> 
            <Route path="/viewrecipes" element={<Viewrecipes/>}/>
            <Route path="/Favorites" element={<FavouriteList/>}/>
            <Route path="/Location" element={<LocationScreen/>}/>
        </Routes>
        </BrowserRouter>
        <ToastContainer/>

        </RecipeContext.Provider>
        
        )
}

export default RecipeNavigation;