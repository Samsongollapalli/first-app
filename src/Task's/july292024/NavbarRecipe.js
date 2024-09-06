import { Link,NavLink } from "react-router-dom";
import "./NavbarRecipe.css"

const ReceipeNavbar=()=>{
  const LinkStyle ={margin:10,textDecoration :"none"} 
    return(
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={"/"} style={LinkStyle}> Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Recipe"} style={LinkStyle}> Recipe  </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/location"} style={LinkStyle}> Location  </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Register"} style={LinkStyle}> Register Here </NavLink>
      </li>

    </ul>
  </div>
</nav>

    )
}

export default ReceipeNavbar;