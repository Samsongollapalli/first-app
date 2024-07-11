
import { Ipldata  } from "../lists/data";
import Heading1 from "../heading/heading";
import CustomImage from "../image/customimage";

const ListIplTeam =()=>{
    return(

        <div style={{textAlign:"center",border:"2px solid black"}}>
            {Ipldata.map(eachName=>{return(
  <div style={{border:"2px solid black"}}>
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
    )
};

export default ListIplTeam;