
import "./button.css"

const Custombutton = (prop) => {
    const { text, bgColor ,width,height=100} = prop
    const mystyle = {backgroundColor:bgColor,width:width,height:height }
    
    return  <button class = "button" > {text} </button>

}

export default Custombutton;