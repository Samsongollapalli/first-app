import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import React from "react";

const TableList=()=>{
    const [table,setTable]=useState([])
    const tableHandler= async()=>{
         try{
            const recipeData = await axios.get("https://dummyjson.com/recipes");
            setTable((table=>table=(recipeData.data.recipes)))
            console.log(recipeData)
         }catch(err){
             console.log("error")
         }
    }
    const TableDeleteHandler=(id)=>{
      const DeleteTable = table.filter((eachitem,ind)=>ind!=id)
      setTable(DeleteTable);
    }
      
    return(
<>
<h1> Hello This Example </h1>
<button onClick={tableHandler}> Click Here </button>
<div>
<Table striped bordered hover>
 <thead>
   <tr>
     <th>Id </th>
     <th>Recipe Name</th>
     <th>ingredients</th>
     <th>Images</th>
   </tr>
 </thead>
 <tbody>

 {
 
      table.map((eachitem,id)=>{return(
          <React.Fragment key={id}>
            <tr>
        <td>  <p> {eachitem.id}</p> </td>
       <td>  <h4> {eachitem.name}</h4> </td>  
       <td> <h4> {eachitem.ingredients}</h4>  </td>   
         <td> <img src= {eachitem.image} height={200} width={200}/> </td> 
         <td> <button onClick={()=>TableDeleteHandler(id)}> Click Here </button> </td>
          </tr>
          </React.Fragment>
         )}) 
         
      }

 </tbody>


</Table>
</div>
</>
    )
}


export default TableList;

// 
// {
 
//     table.map((eachitem,id)=>{return(
//         <React.Fragment key={id}>
//         <p> {eachitem.id}</p>
//         <h4> {eachitem.name}</h4>
//         <h4> {eachitem.ingredients}</h4>
//         <img src= {eachitem.image} height={200} width={200}/>
//         </React.Fragment>
//        )}) 
        
//     }
// 