import RecipeNavbar from "./NavbarRecipe";


const LocationScreen=()=>{
    return(
        <>
        <RecipeNavbar/>
        <h1> Here is The Location </h1>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.207637886559!2d78.4021228!3d17.4930957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91625d9cd1ad%3A0x4455387ad24a675d!2s10000coders!5e0!3m2!1sen!2sin!4v1723300022226!5m2!1sen!2sin" width="100%" height="650px" ></iframe>
        </div>
        </>
    )
}

export default LocationScreen;