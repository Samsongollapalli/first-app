import CustomList from "./listrenderning";

export const Ingredients=[ 
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
        ]

const Conditional_Rendering =()=>{
    const Islogin = true;
    const IsAdmin = true;
    const Student = 10;
    

//  return (
//     <>
//     {Islogin ? (
//         <>
//         {  IsAdmin ? (
//             <>
//          <h1> Hello  Admin  This iS true </h1>

//         {Student && <h1> There is no of student in the class { Student} </h1>} 
//                </> ) : (
//                <>
       
//            <h1> Welcome This false  </h1>
//                </>x
//         ) }
   
//         </>
//     ):(

//         <>
//          <h1> please login again </h1>
//         </>
//     )}

//     </>
//  )

// }

if(Islogin){
        return (
            <>
            <h1> Welcome user </h1>
            </>
        );
    }
    else{
        return (
            <>
            <h1> Welcome Admin</h1>
            <p> {Ingredients} </p>
          </>
        )
    }
}
export default Conditional_Rendering;
