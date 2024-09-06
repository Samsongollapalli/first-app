import { useContext } from "react";
import RecipeNavbar from "./NavbarRecipe";
import { RecipeContext } from "./NavigationRecipeMaler";


const FavouriteList=()=>{

    const { favouriteData,removeFavList }= useContext(RecipeContext)

    const removeHandler=(eachfood)=>{

        removeFavList(eachfood.id)
       
    }

    return(
        <>
        <RecipeNavbar/>
        <h1>    favorite Page </h1>
        <div className="mainavouritediv">
        {
           favouriteData && favouriteData.length > 0  ?
     <>
     {
        favouriteData.map((each,id)=>{
            return(
                <div key={id} className="Favouritedishadded">
                    <h4 className="favouritename"> {each.name} </h4> 
                    <img src={each.image} height={300}  width={300}/>  <br></br>
                    <button className="removeButton" onClick={()=>removeHandler(each)}> Remove the Dish </button>
                </div>
               
            )
        })
     }
     </> 
     :     
   <h4> No Dishes Found </h4>  

        }
       </div>
 </>
    )
}

export default FavouriteList;