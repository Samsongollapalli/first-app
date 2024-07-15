

const RecipeItems=(prop)=>{
    const {name,ingredients,instructions} = prop
    return (
        <div> 
            <h1> {name} </h1>
            <p> {ingredients} </p>
            <p> {instructions} </p>
        </div>
    )
}

export default RecipeItems;