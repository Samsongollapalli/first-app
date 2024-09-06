import { useRef, useState } from "react";

const FormRegisteration=()=>{
    const FirstNameRef  = useRef();
    const LastNameRef  = useRef();
    const GmailRef = useRef();
    const PhoneNumberRef = useRef();
     const [error,SetError]=useState();
     const [list,setlist]= useState([]); 
    const SubmitHandler=(event)=>{
          event.preventDefault()
             const FirstNameEntered = FirstNameRef.current.value;
             const LastNameEntered = LastNameRef.current.value;
             const GmailRefEntered = GmailRef.current.value;
             const PhoneNumberEntered = PhoneNumberRef.current.value;
             console.log(FirstNameEntered,LastNameEntered,GmailRefEntered,PhoneNumberEntered);
             const ListOfData=[]
             const DetailsList={
              firstName:FirstNameEntered,
              LastName:LastNameEntered,
              Gmail:GmailRefEntered,
              PhoneNumber:PhoneNumberEntered,
             }
             ListOfData.push(DetailsList)
             window.localStorage.setItem("Details",JSON.stringify(ListOfData));
            }
    return(
        <>
        <h1> Please Register </h1>
        <form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label htmlFor="exampleFirstName" className="form-label">
      First Name 
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFirstName"
      aria-describedby="emailHelp"
      ref={FirstNameRef}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleLastName" className="form-label">
      Last Name 
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleLastName"
      ref={LastNameRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputUsername" className="form-label">
      Username 
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputUsername"
      ref={GmailRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label">
      Phone Number
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPhone"
      ref={PhoneNumberRef}
      
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}

export default FormRegisteration;