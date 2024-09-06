import { useContext, useEffect, useState } from "react";
import RecipeNavbar from "./NavbarRecipe";
import { RecipeContext } from "./NavigationRecipeMaler";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const RecipeHomeScreen=()=>{
const navigate=useNavigate()
    const {recipesData, AddFavouritelist,viewrecipesdata }= useContext(RecipeContext)
    const [search,setsearch] = useState("")
    const [listofrecipes,setlistofrecipes]=useState([])

    console.log(recipesData,"Recipe List....")

    useEffect(()=>{

    },[])

    const addFoodHandler=(eachData)=>{
            AddFavouritelist(eachData);
    }
      
    const ViewRecipes=(eachdata)=>{
         viewrecipesdata(eachdata);
         navigate('/viewrecipes')
    }

    // const fetchData=async()=>{
    //     try{
    //     const {data,status} = await axios.get("https://dummyjson.com/recipes/search?q=${searchFood}")
    //     const newData=data.recipes.map((each)=>{
    //         return {...each,}
    //     })
    // }
    //     catch{

    //     }
    // }

    const datasearch = recipesData && recipesData.recipes ? recipesData.recipes.filter((each)=>{
       return each.name.toLowerCase().includes(search.toLowerCase())
    }) :[];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    return(
        <>     
        <RecipeNavbar/>
        <h1 className="recipename"> welcome to Recipe's World </h1>
        <div className="searchdiv">
        <input className="input" type="search" placeholder={"Search Food Recipes"}onChange={(each)=>{setsearch(each.target.value)}}/>
        </div>
        <div className="maincontainer">
        {
            datasearch.length > 0 ? 
       
          (  datasearch.map((eachList,id)=>{return(
                
                <>
                   <div className="recipeDetails" key={eachList.id}>
                   <h4 className="Recipename"> {eachList.name}</h4>
                   <img src={eachList.image} height={300} width={300} />
                   <div className="viewandadd">
                   <button className="ViewButtom" onClick={()=>ViewRecipes(eachList)}> View Recipes </button>
                      {
                        eachList.exitsinfavourite ? (<button> Go to Favorites </button> )
                        :
                         <button className="AddfoodHandler" onClick={()=>addFoodHandler(eachList)}> Add to Favorites </button> 
                      }
                   </div>
                   </div>
                </>   
            )})): (
                <h1> Food Dish No Found ! </h1>
            ) 
        }
        </div>
        </>
    )
}
export default RecipeHomeScreen;