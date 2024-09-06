import axios from "axios";
import { useEffect, useState } from "react";

const RecipeDrowpDown=()=>{
    const [recipes,setrecipes]=useState([])
    const [RecipeSelected,setRecipeSelected] = useState({})
    useEffect(()=>{
        RecipesList();

    },[])

    const RecipesList = async()=>{
        try{
            const { data } = await axios.get("https://dummyjson.com/recipes")
           const DataOnly =data.recipes.map((eachrecipes)=>{return{id:eachrecipes.id,name:eachrecipes.name}
            
           })
           console.log(DataOnly)
           setrecipes(DataOnly)
            // console.log(data)
        }
        catch(err){
            console.log("Error")
        }
    }
    const SelectHandler=(event)=>{
            const selectedRecipeId=event.target.value;
               FetchRecipeId(selectedRecipeId);
    }

    const FetchRecipeId=async(recipeId)=>{
         const {data} = await axios.get(`https://dummyjson.com/recipes/${recipeId}`)
         console.log(data)
         setRecipeSelected(FetchRecipeId)
    }
    return(
        <>
        <h1> Hello This Is Details </h1>
        {
            recipes.length > 0 ? (
            <select onClick={SelectHandler}>
                {
                    recipes.map(each=>(
                        <option value={each.id}>{each.name} </option>
                    ))
                }
               
            </select>    
            ):(
                <h4> no Recipes Found </h4>
            )
        }

        {
            Object.keys(RecipeSelected).length > 0 && (
                <div>
                    <h4> {RecipeSelected.name}</h4>
                    <h4> {RecipeSelected.rating}</h4>
                </div>
            )
        }
        </>
    )
}

export default RecipeDrowpDown;