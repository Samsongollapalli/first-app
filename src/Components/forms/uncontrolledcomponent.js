import { useRef, useState } from "react";


const UnControlledComponent=()=>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,seterror]=useState(null);
    const SubmitHanlder=(event)=>{
        event.preventDefault();
       const EmailEntered = emailRef.current.value;
       const PasswordEntered = passwordRef.current.value;
      
       if(EmailEntered.length<15 && PasswordEntered.length<15){
        seterror(null)

           successHandler(EmailEntered,PasswordEntered);
       }else{
               seterror("Please Enter <10 Character's Email and Password")
       }
    }

    const successHandler = async(username,password)=>{
        try{
        const Response = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username,
              password,
              
            })
          })
          const final=await Response.json()
          console.log(final)
} catch (error){

}

    }
    

    return(
        <>
     <form onSubmit={SubmitHanlder}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={emailRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {error&&<span>{error}</span>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
   
        </>
    )
}
export default UnControlledComponent;