import { useState } from "react";
import Greetingfn from "../../../javascriptfunction/greetingfunction";

const ShowGreeeting=()=>{
    const [greeting,setgreetings]=useState("")
    const greetingHanlder=()=>{
        const Greetingdata =Greetingfn();
        setgreetings(Greetingdata)
    }

    return(
        <>
        <h1> Hello {greeting}  </h1>
        <button onClick={greetingHanlder}> Click Here To Know  </button>
        </>
    )
}

export default ShowGreeeting;