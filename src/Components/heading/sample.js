const SampleHeading1 =(prop)=>{
    const {text,height,width,color} = prop
    return(
        <div>
        <h1> {text} </h1>
        <h1> {height} </h1>
        <h1> {width} </h1>
        <h1> {color} </h1>
        </div>
    )
}

export default SampleHeading1;