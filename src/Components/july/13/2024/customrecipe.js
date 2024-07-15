// import RecipeDetails from "../Data/recipedeatils"
// import RecipeItems from "../heading/receipedeatilsprop"
// import CustomImage from "../image/customimage"

// const CustomRecipe =()=>{
//     // console.log(RecipeDetails)
//     return (
//         <div>
//             hello
//         {/* {RecipeDetails.map(eachrecipe=>{return(
//             <div>
                
//             <RecipeItems name = {eachrecipe.id}/>
//                <CustomImage  image ={eachrecipe.image} altText="food" height={200} width={200}/>
//                <RecipeDetails ingredients = {eachrecipe.ingredients}/> 
//             </div>
//         )})
//         } */}

// }

// export default CustomRecipe;


import RecipeDetails from "../../../Data/recipedeatils";
import RecipeItems from "../../../heading/receipedeatilsprop";
import CustomImage from "../../../image/customimage";
import "./food.css"
const CustomRecipe = () => {

    return (
        <div class="recipe">
            {RecipeDetails.map((eachrecipe) => {
                console.log(eachrecipe.name, eachrecipe.id);
                return (
                 // <div key={eachrecipe.id}>
                    <div className="recipecontainer">
                        <RecipeItems name={eachrecipe.name} />
                        <CustomImage source={eachrecipe.image} altText="food" height={200} width={200} />
                        <RecipeItems ingredients ={eachrecipe.ingredients}/>
                        <RecipeItems instructions ={eachrecipe.instructions  }/>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomRecipe;
