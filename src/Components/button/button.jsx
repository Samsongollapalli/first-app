
import "./button.css"

const Custombutton = (prop) => {
    const { text, bgColor ,width,height,color} = prop
    const mystyle = {backgroundColor:bgColor,width:width,height:height,color:color}
    
    return  <button class = "button" > {text} </button>

}

export default Custombutton;