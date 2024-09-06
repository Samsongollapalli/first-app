import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Fakestoreapi =()=>{
   const [products,setproducts]=useState([])
   const [totalprice,settotalprice] = useState(0)
    useEffect(()=>{
        fakestoredata();
    },[])

    useEffect(()=>{
      TotalValue();
    },[products])
const TotalValue = () =>{ 
  const Total = products.reduce(
    (acc,curr)=> acc+curr.quantity*curr.price,0
  )
  settotalprice(Total)
}

    const fakestoredata= async()=>{

            const { data ,status } = await axios.get("https://fakestoreapi.com/products")

            if(status===200){
              const NewdataQuantity = data.map((eachlist)=>{
                return {...eachlist, quantity:1};
              })
              console.log(NewdataQuantity,"Data List.....")
            setproducts(NewdataQuantity)
            }            
    }

    const incrementHandler=(targetId)=>{
      console.log(targetId);

      const NewincrementHandler=products.map((each)=>{
        if(each.id===targetId){
          return {...each,quantity:each.quantity+1}
        }
          else {
            return each
          }
        }
      )
      setproducts(NewincrementHandler)
    }

    const decrementHandler=(targetId)=>{
      const NewDecrementHandler=products.map((each)=>{
        if(each.id===targetId){
          return {...each,quantity:each.quantity-1}
        }
        else{
          return each
        }
      })
      setproducts(NewDecrementHandler)
    }

    return(
        <>
        <h1> Table </h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th> Id </th>
          <th> Title </th>
          <th>price </th>
          <th> Quantity </th>
          <th> price </th>
        </tr>
      </thead>
      <tbody>
       
        {
            products.map((each)=>{return(
                <>
            <tr>
          <td>{each.id}</td>
          <td><h4> {each.title}</h4></td>
          <td><h4> {each.price}</h4></td>
          <td> 
              <button onClick={()=>decrementHandler(each.id)}> - </button>
             {each.quantity} 
              <button onClick={()=>incrementHandler(each.id)}> + </button>
             </td>
          <td> <h4> {each.quantity*each.price} </h4></td>
                
          </tr>   
                </>
            )})
        }      
 
      <td>  <h4> Total Price </h4> </td>
      <td>  </td>
      <td>  </td>
      <td>   </td>
      <h1>{totalprice}</h1>

      </tbody>

     
    </Table>


      
        </>
    )
}

export default Fakestoreapi;