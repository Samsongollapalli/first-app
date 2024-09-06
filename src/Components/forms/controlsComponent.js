// import { useState } from "react"


// const ControlComponents=()=>{
//     const [Username,setUserName]=useState("")
//     const [PassWord,SetPassWord]=useState("")
//     const [userNameError,SetUserNameError] = useState(false)
//     const [PassWordError,SetPassWordError] = useState(false)
//     const[user,SetUser]=useState({})


//     const SubmitHanlder=(event)=>{
//       event.preventDefault();

//       if(!userNameError && !PassWordError){
//         successHandler(Username,PassWord)
//       }
//     }


//    const  successHandler=async (Username,PassWord)=>{
//     try{
//         const res = await fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 username:Username,
//                 passWord:PassWord,
//             })
//           })
//           const final=await res.json()
//           console.log(final)

//           if(final.message){
//             alert(final.message)
//           }
//           else{
//             console.log(final,"Response")
//             SetUser(final);
//           }

//     }  catch (error){
    
  
//     }
// }
// successHandler()
//  const UserNameHandler=(event)=>{
//     const UserNameEntered = event.target.value;
//     console.log(UserNameEntered)
//     setUserName(UserNameEntered)
//      console.log(UserNameEntered,"UserName Entering....")
//      if(Validate(UserNameEntered)){
//           SetUserNameError(true)
//      }
//      else{
//         SetUserNameError(false)
//      }
// }

// const PassWordHandler=(event)=>{
//     const PassWordEntered = event.target.value;
//     SetPassWord(PassWordEntered)
//      console.log(PassWordEntered,"Password Entering...")
//      if(Validate(PassWordEntered)){
//         SetPassWordError(true)
//      }
//      else{
//         SetPassWordError(false)
//      }
// }

// console.log(Username,"user",PassWord,"pass")

// const Validate=(value)=>{
//   return value.length > 15;
// }
//    return(
//     <>
//     {
//         Object.keys(user).length>0?<><h2>{user.firstName}</h2></>: <> <h4> Hello </h4>
//         {/* <form> */}
//         <form onSubmit={SubmitHanlder}>
//       <div className="mb-3 mt-3">
//         <label htmlFor="email" className="form-label">
//           Email:
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="email"
//           placeholder="Enter email"
//           name="email"
//           value={Username}
//           onChange={UserNameHandler}
//         />
//         {userNameError &&(<span> Please Entered less Then 15 Characters </span>)}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="pwd" className="form-label">
//           Password:
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="pwd"
//           placeholder="Enter password"
//           name="pswd"
//           value={PassWord}
//           onChange={PassWordHandler}
//         />
//         {PassWordError &&(<span> Please Entered less Then 15 Characters </span>)}
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//         </>
//     }
   
//     </>
//    )
// }

// export default ControlComponents;





import { useState } from "react";

const ControlComponents = () => {
  const [Username, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const [user, setUser] = useState({});

  const SubmitHandler = async (event) => {
    event.preventDefault();
    
    const UserNameEntered = event.target.username.value;
    const PassWordEntered = event.target.passWord.value;

    const isUserNameValid = Validate(UserNameEntered);
    const isPassWordValid = Validate(PassWordEntered);

    setUserName(UserNameEntered);
    setPassWord(PassWordEntered);
    setUserNameError(isUserNameValid);
    setPassWordError(isPassWordValid);

    if (!isUserNameValid && !isPassWordValid) {
      await successHandler(UserNameEntered, PassWordEntered);
    }
  }; 

  const Validate = (value) => {
    return value.length > 15;
  };
  const successHandler = async (Username, PassWord) => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: Username,
          password: PassWord,
        }),
      });
      const final = await res.json();
      console.log(final);

      if (final.message) {
        alert(final.message);
      } else {
        console.log(final, "Response");
        setUser(final);
      }
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <><h2> welcome {user.firstName} {user.lastName}</h2></>
      ) : (
        <>
          <h4> Hello </h4>
          <form onSubmit={SubmitHandler}>
            <div className="mb-3 mt-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                name="username"
              />
              {userNameError && (
                <span> Please Enter less Than 15 Characters </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="passWord"
              />
              {passWordError && (
                <span> Please Enter less Than 15 Characters </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default ControlComponents;
