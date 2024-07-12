
import { Ipldata  } from "../lists/data";
import Heading1 from "../heading/heading";
import CustomImage from "../image/customimage";
import NavbarList from "../lists/navbarlist";
import FooterDetails from "../footer/footer";

const ListIplTeam =()=>{
    return(
<div>
<NavbarList/>
        <div className="button">
            {Ipldata.map(eachName=>{return(
<div className="main">
<Heading1 title ={eachName.Name}/>
<CustomImage source={eachName.source} 
altText = "Ipllogo"
width={150}
height={150}
/>

<Heading1 captain = {eachName.captain}/>
<Heading1 Players = {eachName.Players}/>
<Heading1 Trophy ={eachName.Trophy}/>

    </div>
)})

}
        </div>
        <FooterDetails/>
        </div>
      
    )
};

export default ListIplTeam; 