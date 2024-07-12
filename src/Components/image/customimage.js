const CustomImage =(prop) => {
    const {Source,altText,width,height} = prop
    return (
        <img src = {Source} alt = {altText} width={width} height={height}
/>
    )
}

export default CustomImage;