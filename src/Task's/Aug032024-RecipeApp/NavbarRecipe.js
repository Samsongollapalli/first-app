import { Link, NavLink } from "react-router-dom"
import { RecipeContext } from "./NavigationRecipeMaler";
import { useContext } from "react";
import "./recipe.css"

const RecipeNavbar=()=>{

   const {favouriteData}=useContext(RecipeContext)
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={"/"} className="nav-link" href="#">
          Home 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/viewrecipes"} className="nav-link" href="#">
         View Recipes 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Location"} className="nav-link" href="#">
        Location
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to={"/Favorites"} className="nav-link" href="#">
        favorite List {favouriteData.length}
        </NavLink>
      </li>
      

    </ul>
  </div>
</nav>

        </>
    )
}

export default RecipeNavbar;