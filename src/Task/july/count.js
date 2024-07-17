  
const Arraylist=(prop)=>{
     const {list} =prop
     return (
        <>
     <h1> {list.length ? <h1>the array length is {list.length}</h1>: <h1> The array is Empty </h1> } </h1>
        </>
     )
}


export default Arraylist;
          