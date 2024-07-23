import { Component } from "react";
import axios from "axios";
import "./profile.css"
import CustomImageorder from "./image";
import CustomImage from "../../Components/image/customimage";
import image from "./image";

class ProfileListComponent extends Component{
    state={
        profilelist:[],
        loader:true,
        error:false,
    }
    ProfileHandler=async()=>{
        try{
           const {status,data} = await axios.get("https://jsonplaceholder.typicode.com/users");
           if(status===200)
            this.setState({
               profilelist:data,
               loader:false
            })
        }catch(err){
            this.setState({
                error:true,
                loader:false
            })
        }
    }
    componentDidMount(){
        this.ProfileHandler()
    }
    render(){
        return(
            <>
           {
            this.state.loader ? <h1> Please Wait..... </h1>
            : <>
                    
              {
                <div className="insidecontainer">
                {
                    this.state.profilelist.map((eachlist,index)=>{
                        const {name,username,email} = eachlist
                        return(
                            <div key={index} className="container">
                            <img src={image[index]} width="200" height="200"></img>
                            <h1> {name}</h1>
                            <h3> {username} </h3>
                            <p> {email}</p>
                            </div>
                        )
                    })
                }
                </div>
              }
                 
            </>
           }
           </>
        )
    }
}

export default ProfileListComponent;