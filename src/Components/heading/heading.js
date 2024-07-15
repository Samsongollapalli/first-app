
const Heading1 =(prop) => {
    const {title,Trophy,captain,Players} = prop

    return (
        <div>
        <h1 className="titlestyle"> {title}   </h1>
        <h1>  {Trophy}  </h1>
        <h1> {captain} </h1> 
        <h2> {Players} </h2>

        </div>
    )
};
export default Heading1


