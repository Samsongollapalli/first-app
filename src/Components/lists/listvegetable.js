
const Listoffruit=(prop)=>{
  const {fruits} = prop
   return (
    <div>
          {fruits.map(eachfruit=>{return (
            <ol>
                <li> {eachfruit} </li>
            </ol>
          )
          
          })}
    </div>
   
   )
}

export default Listoffruit;