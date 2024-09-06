import { Link,NavLink } from "react-router-dom";
import "./navbar.css"



const Navbarexample=()=>{
  const LinkStyle ={margin:10,textDecoration :"none"} 
    return(
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={"/"} style={LinkStyle}> Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/About"} style={LinkStyle}> About </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Setting"} style={LinkStyle}> Setting </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/Blog"} style={LinkStyle}> Blog </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/recipes"} style={LinkStyle}> recipes </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/dropdown"} style={LinkStyle}> Dropdown </NavLink>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Navbarexample;