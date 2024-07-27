import axios from "axios";
import { useEffect } from "react";
import RecipeDetails from "../../Components/Data/recipedeatils";
import Table from 'react-bootstrap/Table';
import React from "react";

const UseEffectExample=()=>{
    useEffect(()=>{
   console.log("Use Effect")
   FetchRecipe();
    },[])

   const FetchRecipe=async()=>{
    try{
    const RecipeDetails = await axios.get("https://dummyjson.com/recipes")
    console.log(RecipeDetails)

     } catch(err){
        console.log("error")
     }

   }
    return(
        <>
        <h1> Hello </h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>ingredients</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
            RecipeDetails.map((eachlist,id)=>{return(
                <React.Fragment key={id}>
           <tr>   
             <td> <h4> {eachlist.id} </h4> </td>
             <td> <h4> {eachlist.name}</h4> </td>
             <td>{eachlist.ingredients}</td>
             <td>{<img src={eachlist.image} height={200} width={200}/>}  </td>
             </tr>
                </React.Fragment>
                
            )})
           
        }
         </tbody>
        </Table>
        </>
    )
}

export default UseEffectExample;