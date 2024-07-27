import { useEffect, useState } from "react";

const UseEffectExample2=()=>{
    const [xPosition,setXposition] = useState(0);
    const [yPosition,setYposition] = useState(0);
    useEffect(()=>{
window.addEventListener("mousemove",MouseTrack)
        return()=>{
            window.addEventListener("mousemove",MouseTrack)
        }
    },[])
    const MouseTrack=(event)=>{
        setXposition(event.clientX)
        setYposition(event.clientY)
    }
    return(
        <>
        <h1> This is sample Example </h1>
        <h1> Curret X-Position {xPosition}</h1>
        <h1> Curret X-Position {yPosition}</h1>
        </>
    )
}

export default UseEffectExample2;