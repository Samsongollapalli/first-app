import { Component } from "react"
import React from "react";
import axios from "axios";
import Customlistformap from "../../Components/conditional-renderning/listrenderning";
import CustomImageApi from "../july172024/customImageapi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fetch.css"

  
  class RecipeList extends Component{
    state={
        RecipeList:[],
        loader:true,
        error:false,
       };
       fetchRecipe =async()=>{
        try{
            const {status,data} = await axios.get("https://dummyjson.com/recipes");
             if(status===200){
             this.setState({
                RecipeList :data.recipes,
                loader : false,
             })
             } 
        } catch(err){
            this.setState({
                error:true,
                loader:false,
            })
        }
       }
       componentDidMount(){
        this.fetchRecipe();
       }
    render(){
return(
    <React.Fragment>
        <h1> Hello </h1>
        {
            this.state.loader ?  <><h1> Please wait..... </h1></>
            :
            <>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">ingredients</th>
      <th scope="col">instructions</th>
    </tr>
    </thead>
    <tbody>
                { 
                this.state.RecipeList.map(each=>{
                    const {id,name,image,ingredients,instructions} = each
                    return(
                        // <div key={each.id}>


<tr key={each.id}>
      <th scope="row"> {id} </th>
      <td> {name} </td>
      <td>  <CustomImageApi source = {image} alt = "img" height={150} width={150}/> </td>
      <td className=""> <ol>
                        {ingredients.map((each)=>{return(
                            <>
                            <li> {each} </li>
                            </>
                        )})}
                        </ol> </td>
        {/* <td> <Customlistformap list= {ingredients}/></td> */}
      <td>            <ul>
                        {instructions.map((each)=>{return(
                            <>
                            <li> {each} </li>
                            </>
                        )})}
                        </ul></td>
        {/* <td> <Customlistformap list= {instructions}/></td> */}
                
    </tr>

            //   </div>
                    )
                }) 
             }

</tbody>
</table>
            </> 
        }
    </React.Fragment>
)
    }
  }
  export default RecipeList;