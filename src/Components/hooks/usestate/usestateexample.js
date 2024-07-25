import { useState } from "react";

const UseStateExample=()=>{
  const [login,setlogin]=useState(false);
  const [count,setcount] = useState(1)
  const loginHandler=()=>{
    setlogin((login)=>!login);  
    // setlogin(!login)  // This is Not right to use Because Some Draw Back are there in this method
  }
  const IncrementHandler=()=>{
    setcount((count=>count+1)) 
    setcount((count=>count+1)) 
    setcount((count=>count+1)) 
    setcount((count=>count+2)) 
  } 
    return(
        <> 
        <h1> Use state Example </h1>
        {  login ?  <h1> Welcome User </h1>: <h1> Please Login </h1> }
        <button onClick={loginHandler}> Click Here </button>
        <button onClick={IncrementHandler}> {count} </button>        

        </>
    )
}

export default UseStateExample;