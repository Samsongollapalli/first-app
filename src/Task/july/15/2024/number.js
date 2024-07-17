import { Component } from "react"

import "./number.css"
const Listitems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

class Numberlis extends Component{
   
    render(){
        return(
            <div className="numberdiv">
            {Listitems.map((eachlist)=>{return(
                <>
            <h1 className="oddnumber"> {eachlist % 2 == 0 ? <> <h1 className="evennumber">{eachlist} </h1> </>: eachlist } </h1>
                </>
            )})}
            
            </div>
        )
    }
}
export default Numberlis;