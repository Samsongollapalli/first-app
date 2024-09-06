import ReceipeNavbar from "./NavbarRecipe";

const RecipeHomeScreen=()=>{
    return(
        <>
        <ReceipeNavbar/>
        <h1> This is Home Screen  </h1>
        <img src="https://img.freepik.com/premium-photo/topdown-view-kitchen-table-with-ingredients-utensils-open-cookbook_645697-7951.jpg" height={750} width={1500}/>
        </>
    );
};

export default RecipeHomeScreen;