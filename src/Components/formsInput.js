import { useState } from "react"

const RecipesInput=()=>{

    const [selected,setselected]=useState("")
    const Recipes=[
        {
            name: "pizze",
            id:1
        },
        {
            name:" Briyani",
            id:2
        }
    ]
const ChangeHandlers=(event)=>{
    setselected(event.target.value);
}

 const SubmitHandlers =(event)=>{
    event.preventDefault();
   console.log(selected,"dish.......")
 }

    return(
        <>
        <form onSubmit={SubmitHandlers}>
        <select onChange={ChangeHandlers}>
            {
                Recipes.map((eachrecipes,id)=>{return(
                    <>
                    <option key={id} value={eachrecipes.name}> {eachrecipes.name}</option>
                    </>
                )})
            }
            {/* <option value={"Dish 1"}> Item 1 </option>
            <option value={"Dish 2"}> Item 2 </option> */}
        </select>
        <button> SUBMIT </button>
        </form>
        </>
    )
}

export default RecipesInput;