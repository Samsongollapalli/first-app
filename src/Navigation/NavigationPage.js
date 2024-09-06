// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import HomeScreen from "../Screens/homescreen";
// import AboutScreen from "../Screens/about";
// import SettingScreen from "../Screens/setting";
// import BlogScreen from "../Screens/blog";
// import InvalidScreen from "../Screens/invalidScreen";
// import Users from "../Screens/users";
// import RecipesDeailsnav from "../Screens/recipeusingNavigations";
// import RecipeDetailsParams from "../Screens/recipedetails";




// const NavigationsPage=()=>{
//     return(
//         <BrowserRouter> 
//         <Routes>
//          <Route path="/" element={<HomeScreen/>}/>
//          <Route path="/About" element={<AboutScreen/>}/>
//          <Route path="/Setting" element={<SettingScreen/>}/>
//          <Route path="/Blog" element ={<BlogScreen/>}/>
//          {/* <Route path="*" element={<InvalidScreen/>}/> */}
//          <Route path="/Users" element={<Users/>}/>
//          <Route path="/Recipes" element={<RecipesDeailsnav/>}/>
//           {/* {Dynamic Screen} */}
//           <Route path='Recipes/:cuisine/:id' element={<RecipeDetailsParams />} />
        
//           <Route/>
//         </Routes>
//         </BrowserRouter>

//     )
// }

// export default NavigationsPage;



import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/homescreen";
import AboutScreen from "../Screens/about";
import SettingScreen from "../Screens/setting";
import BlogScreen from "../Screens/blog";
import InvalidScreen from "../Screens/invalidScreen";
import Users from "../Screens/users";
import RecipesDeailsnav from "../Screens/recipeusingNavigations";
import Dropdown from "../Screens/dropdown";
import Recipedetails from "../Screens/recipedetails";
import { createContext, useState } from "react";

const NavigationsPage = () => {
    return (     
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/setting" element={<SettingScreen />} />
                <Route path="/blog" element={<BlogScreen />} />
                <Route path="/users" element={<Users />} />
                <Route path="recipes" element={<RecipesDeailsnav />} />
                {/* <Route path="recipes/:cuisine/:recipesId" element={<Recipedetails />} /> */}
                <Route path="recipes/:recipesId" element={<Recipedetails/>}/>
                <Route path="*" element={<InvalidScreen />} />
                <Route path="/dropdown" element={<Dropdown/>}/>
            </Routes>
        </BrowserRouter>
    );
}



export default NavigationsPage;
