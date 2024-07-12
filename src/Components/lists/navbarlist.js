


const NavbarList =(prop)=>{
   
const {text,BgColor,height,width,website}=prop
 
const mystyle={backgroundcolor:BgColor,width:width,height:height,website:website}

return (
     <div className="NavbarDetails">
    <h1 className="Details"> Home  </h1>
    <h1 className="Details"> Ipl Team </h1>
    <h1 className="Details"> ipl franchise </h1>
    <h1 className="Details">  Contact </h1>
    <h1 className="Details">  Website  </h1>
</div> 
)
}

export default NavbarList;


