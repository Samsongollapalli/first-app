import { type } from "@testing-library/user-event/dist/type";
import { act, useReducer } from "react";

const actionTypes={
    BOOK_TICKET: "BOOK_TICKET",
    CANCEL_TICKET : "CANCEL_TICKET",
    CHANGE_TOTAL_TICKET : "CHANGE_TOTAL_TICKET ",
    CHANGE_MOVIE: "CHANGE_MOVIE"
}

const reducer = (state,action) => {
    switch(action.type){
        case actionTypes.BOOK_TICKET:
            return {...state,BookedTicket:state.BookedTicket+action.payload};
        case actionTypes.CANCEL_TICKET:
            return {...state,BookedTicket:state.BookedTicket-action.payload}
        case actionTypes.CHANGE_TOTAL_TICKET:
            return {...state,TotalTickets:state.TotalTickets+action.payload}
        case actionTypes.CHANGE_MOVIE:
            return {...state,Moviename:action.Moviename}
    }
}

const initialstate={
    MovieTheater : "IMAX", 
    Location : "Hyderabad" ,
    Moviename : "Premalu",
    TotalTickets: 100,
    BookedTicket : 20 ,
    CurrentAvailableTicket : 80
}

const UsereducerExample=()=>{
    const[currentState,dispatchFunction]=useReducer(reducer,initialstate)
 
     const BookedHandler=()=>{
        dispatchFunction({
            type: actionTypes.BOOK_TICKET,
            payload : 6,
        })
     }
     const CancelTicketsHandler=()=>{
        dispatchFunction({
            type :actionTypes.CANCEL_TICKET,
            payload : 1
        })
     }
    return(
        <>
        <h1> UseReducer </h1>
        <div>
            <h4> Number of Total Ticket's  : {currentState.TotalTickets}</h4>
            <h4> Number of Booked Ticket's : {currentState.BookedTicket} </h4>
            <h4> Number of Current avaiable Ticket's : {currentState.CurrentAvailableTicket} </h4>
            <h4> Movie Name : {currentState.Moviename}</h4>
            <h4> Theater Name : {currentState.MovieTheater}</h4>
            <button onClick={BookedHandler}> Book Tickets </button>
            <button onClick={CancelTicketsHandler}> cancel Ticket </button>
        </div>
        </>
    )
}
export default UsereducerExample;