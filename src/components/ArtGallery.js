import ArtPiece from "./ArtPiece.js"



// Within a UL element, map through props.array and return ArtPiece component 

const ArtGallery = (props) => {
    console.log (props.noArt)


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