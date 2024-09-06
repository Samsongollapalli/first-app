import React, { useEffect, useState } from "react";
import Navbarexample from "../Components/navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipesDeailsnav=()=>{
    const [recipeLists,setrecipelist]=useState([]);
    useEffect(()=>{
     fetchRecipe();
    },[]);
    const fetchRecipe = async()=>{
        try{
            const RecipeListData = await axios.get("https://dummyjson.com/recipes")
            setrecipelist(RecipeListData.data.recipes);
            // console.log(RecipeListData.data);
        }catch(err){
            console.log("Error")
        }
    }
    return(
        <>    
        <Navbarexample />    
        <h1> Recipe Details </h1>

        {

        }
        {
           recipeLists.map((eachlist)=>{
            // const {name,ingredients,instructions,image,id} = eachlist
            return(
                <React.Fragment>
                <h4> {eachlist.name} </h4>
                <h4> {eachlist.ingredients}</h4> 
                <img src = {eachlist.image} height={250} width={250}/> 
                <h4> {eachlist.instructions}</h4>
                <button> 
                    <Link to={`${eachlist.id}`}> SEE MORE </Link> 
                    {/* ${cuisine}/ */}
                </button>
                </React.Fragment>
            )
           })  
        }
        </>
    )
}

export default RecipesDeailsnav;


// import React, { useEffect, useState } from "react";
// import Navbarexample from "../Components/navbar/navbar";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const RecipesDetailsNav = () => {
//     const [recipeLists, setRecipeLists] = useState([]);

//     useEffect(() => {
//         fetchRecipe();
//     }, []);

//     const fetchRecipe = async () => {
//         try {
//             const RecipeListData = await axios.get("https://dummyjson.com/recipes");
//             setRecipeLists(RecipeListData.data.recipes);
//         } catch (err) {
//             console.error("Error fetching recipes:", err);
//             // You could also set some state here to show an error message to users
//         }
//     };

//     return (
//         <>    
//             <Navbarexample />    
//             <h1>Recipe Details</h1>
//             {recipeLists.length > 0 ? (
//                 recipeLists.map((eachlist) => {
//                     const { name, ingredients, instructions, image, cuisine, id } = eachlist;
//                     return (
//                         <div key={id} style={{ marginBottom: '20px' }}>
//                             <h4>{name}</h4>
//                             <p>{ingredients.join(', ')}</p> {/* Assuming ingredients is an array */}
//                             <img src={image} alt={name} height={250} width={250} />
//                             <p>{instructions}</p>
//                             <button>
//                             <Link to={`/recipes/${cuisine}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                             SEE MORE
//                                 </Link>
//                             </button>
//                         </div>
//                     );
//                 })
//             ) : (
//                 <p>Loading recipes...</p>
//             )}
//         </>
//     );
// }

// export default RecipesDetailsNav;

