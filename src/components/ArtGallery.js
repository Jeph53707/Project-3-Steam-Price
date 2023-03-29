import ArtPiece from "./ArtPiece.js"


// Within a UL element, map through props.array and return ArtPiece component 
// 

const ArtGallery = (props) => {
    return (
        <>
            <h3>The Art!</h3>
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