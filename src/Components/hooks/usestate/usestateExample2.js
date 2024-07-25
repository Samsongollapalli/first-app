import {useState } from "react";
import TodoCompontent from "../../conditional-renderning/todos";

const UseStateExampletwo=()=>{
    const [todos,setTodos]=useState([
        {
            period:"morning",
            todo:" It's 8 AM "
        },
        {
             period:"AfterNoon",
            todo:" It's 1 pm"
        }
    ])
    const TodoHandler=()=>{
        const Newtodo={
            period:"Evening",
            todo:"It's 4pm"
        }
        const newTodoState=[...todos,Newtodo]
        setTodos(newTodoState);
    }

    const DeleteHandlers=(index)=>{
    const FinalDEl = todos.filter((eachtodos,ind)=>ind!=index)
    setTodos(FinalDEl);
    }
    return(
        <>
        <h1> Hello This Use Sate Example 2 </h1>
        <button onClick={TodoHandler}> Click Here For Update </button>
        {
            todos.map((eachtodos,index)=>{return(
                <div key={index}>
                   <h1> {eachtodos.period}</h1>
                   <p> {eachtodos.todo}</p>
                   <button onClick={()=>DeleteHandlers(index)}> click Here To Delete </button>
                </div>
            )})
        }
        </>
    )
}

export default UseStateExampletwo;