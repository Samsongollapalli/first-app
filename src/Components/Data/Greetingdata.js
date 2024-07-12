
import Greeting from "../greeting/greeting";

const GreetingNames = ["samson","Pandu","sam"]
const GreetingData =()=>{
    return (
        <div>
            {
                GreetingNames.map((eachgreeting,index)=>(
                <div key={index}>
                <Greeting> 

                    <GreetingCard name={eachgreeting}/> 

                </Greeting> 
                </div>
            ))}-
           
        </div>
        
    )
}

export default GreetingData;


const GreetingCard=(prop)=>{
    return (
        <>
        <h1> Hello {prop.name} </h1>
        <h1> Today is Nice day </h1>
        </>
    )
}