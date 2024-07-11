const CustomImage =(prop) => {
    const {source,altText,width,height} = prop
    return (
        <img src = {source} alt = {altText} height={width} width={height}
/>
    )
}

export default CustomImage;