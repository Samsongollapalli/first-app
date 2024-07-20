const CustomImageApi=(prop)=>{
    const {source,alt,height,width,margin_left}=prop
    return(
        <img src={source} alt={alt} height={height} width={width} margin={margin_left}/>
    )
}

export default CustomImageApi;