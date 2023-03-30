import ArtPiece from "./ArtPiece.js"

const ArtGallery = (props) => {
    return (
        <>
            <p>Disclaimer: Some of the artworks will not be available due to copyright *looking at you Picasso*</p>
            <h3>The Art!</h3> 
            <ul className="overallArtContainer">
                {
                    props.ArtArray.map ((indArt) => (
                        <ArtPiece ArtImage = {indArt}
                        key = {indArt.id}/>
                    ))
                }
                </ul>

        </>   
    )
}

export default ArtGallery;