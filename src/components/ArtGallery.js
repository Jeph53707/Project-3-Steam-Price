import ArtPiece from "./ArtPiece.js"


// Within a UL element, map through props.array and return ArtPiece component 
// 

const ArtGallery = (props) => {
    console.log(props.ArtArray)
   
    return (
        <>
            <h2>This is the Art Array</h2>
            <ul>
                {
                    props.ArtArray.map ((indArt) => (
                        <ArtPiece ArtImage = {indArt}/>
                    ))
                }
            </ul>
        
        </>
    )
}

export default ArtGallery;