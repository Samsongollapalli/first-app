import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Example=()=>{
    const [product,setProduct]=useState([])
    useEffect(()=>{
        ProductData()
    },[])
    const ProductData=async()=>{
       try{
        const DataofProducts= await axios.get("https://fakestoreapi.com/products")
        setProduct(DataofProducts.data)
       }
       catch(err){
        console.log("error")
       }
        
    }
    return(
        <>
        <h1> Hello </h1>
        {
              product.map((each,id)=>{return(
                <div key={each.id}>
                  <h4>{each.title}</h4>
                </div>
              )})
        }
        </>
    )
}
export default Example 