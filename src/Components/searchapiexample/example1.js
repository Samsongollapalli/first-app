import axios from "axios"
import { useEffect, useState } from "react"

const Search=()=>{

    const [data,setData]=useState([])

    const [search,setSearch]=useState('')
    console.log(search,"ramesh.....")



       
    useEffect(()=>{
        productsdata()
    },[])

    const productsdata=async()=>{
        let data=await axios.get("https://fakestoreapi.com/products")
        setData(data?.data)
     }
    

     const filterdata=data.filter((e)=>{
        return e.title.toLowerCase().includes(search.toLocaleLowerCase())
     })


return(


 <div>
    <input type="search" onChange={(e)=>{
        // console.log(e,"pppppp---------")
        setSearch(e.target.value)}} ></input>
    <table>
    <tr>
        <th>TITLE</th>
        <th>IMAGE</th>
        <th>PRICE</th>
        </tr>
        {filterdata.map((e)=>{
            return(
                <tr>
                    <th>{e?.title}</th>
                    <th><img src={e.image} height="50px" width="50px"></img></th>
                    <th>{e?.price}</th>
                </tr>
            )
        })}
    </table>
 </div>

)

}

export default Search;