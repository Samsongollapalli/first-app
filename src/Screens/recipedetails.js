import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TableList from "../Task's/july232024/tableusingaddbutton"


const Recipedetails=()=>{
//  const {recipesId}=  useParams(

//  )
//  const [recipelistdetails,setrecipelistdetails]=useState([])
//  useEffect(()=>{
//   dataofrecipe();
//  },[recipesId])

//  const dataofrecipe=async()=>{
// try{
// const Result= await axios.get(
//   "https://dummyjson.com/recipes"
// );
// console.log(Result)
// setrecipelistdetails(Result)

// } catch(error){

// }
// }

  return(
    <>
    <h1> Hello this Recipe details </h1>
     <TableList/>

    {/* {
    Result.map((eachrecipe)=>{
        return(
          <>
          <h1> {eachrecipe.name} </h1>
          <img src={eachrecipe.image}  height={250} width={250}/>
          <h4> {eachrecipe.ingredients}</h4>
          </>
        )})
    } */}
      
    </>
  )
}

export default Recipedetails;