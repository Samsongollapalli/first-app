import { Link } from "react-router-dom";


const InvalidScreen=()=>{
    return(
        <>
        <h1> Invalid Screen 404 Error </h1>
        <button> <Link to={"/"}> Go to Home Page </Link></button>
        </>
    )
}
export default InvalidScreen;