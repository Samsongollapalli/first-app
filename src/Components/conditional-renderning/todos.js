import { Component } from "react";


class TodoCompontent extends Component {
    state ={
        todo:[" I am used react for bulid application","Hello","fine","namaste"]
    }
    render(){
        return (
            <>
            <h1> Hello This is example </h1>
           <ol>
            {
               this.state.todo.map(each=>{return(
                <li> {each}</li>
               )}) 
            }
            </ol>
            </>
        )
    }
}

export default TodoCompontent;