
const CustomListDetails=(prop)=>{
    const {list} = prop
    return(
        <ul>
           {
            list.map((each,index)=>{
                return(
                    <>
                    <li key={index} >{each} </li>
                    </>
                )
            })
           }
        </ul>
    )
}

export default CustomListDetails;