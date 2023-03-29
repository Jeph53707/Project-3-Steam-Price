import ArtPiece from "./ArtPiece.js"


// Within a UL element, map through props.array and return ArtPiece component 
// 

const ArtGallery = (props) => {
    return (
        <>
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