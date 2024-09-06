import { useContext } from "react";
import RecipeNavbar from "./NavbarRecipe";
import { RecipeContext } from "./NavigationRecipeMaler";
import CustomListDetails from "../../Components/customlist/customlist";
import { useNavigate } from "react-router-dom";



const Viewrecipes=()=>{
    const {viewrecipes ,AddFavouritelist}=useContext(RecipeContext)
     console.log(viewrecipes,"Details Coming.....")

     const addFoodHandler=(eachData)=>{
        AddFavouritelist(eachData);
     }

    return(
        <>
        <RecipeNavbar/> 
        
        {
            Object.keys(viewrecipes).length > 0 ? 

            <>
                <div className="recipeviewdetails">
                     <h4> {viewrecipes.name}</h4>
                     <img src={viewrecipes.image} height={200} width={200} />
                     <h6> <CustomListDetails list={viewrecipes.instructions}/> </h6>
                     <h6> <CustomListDetails list={viewrecipes.ingredients}/> </h6>

                     <button className="AddfoodHandler" onClick={()=>addFoodHandler(viewrecipes)}> Add to Favorites </button> 

                     
                </div>
            </> : 
            <>
                <h1>  Search for the Dish </h1>
            </>
        }
        </>
    )
}

export default Viewrecipes;