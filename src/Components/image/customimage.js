const CustomImage =(prop) => {
    const {source,altText,width,height} = prop
    console.log(source)
    return (
        <img src = {source} alt = {altText} width={width} height={height}
/>
    )
}

export default CustomImage;