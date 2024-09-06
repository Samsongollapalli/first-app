import { createContext, useState } from "react"
import NavigationsPage from "./NavigationPage";


export const DataContext = createContext()
 
const Samson=()=>{

    const [username,setusername]=useState("sam")
const [darkMode,setdarkmode] = useState(false)

const ChangeName=(Newname)=>{
setusername(Newname)
}

    return(
    
        <DataContext.Provider value={{
            username:username,
            darkMode:darkMode,
            ChangeName
        }}> 
         <NavigationsPage />
        </DataContext.Provider>

        
    )
}

export default Samson;