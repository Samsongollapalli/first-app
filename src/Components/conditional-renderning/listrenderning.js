import { Ingredients } from "./conditional-renderning"

const CustomList =()=> {
    return(
        <div>
{Ingredients.map((eachilist)=>{return(
    <div>
        <> 
        <ol>
        <li> {Ingredients} </li>
        </ol>
        
        </>
        </div>
)})}
        </div>
    )
}

export default CustomList;