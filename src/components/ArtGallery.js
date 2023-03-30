import ArtPiece from "./ArtPiece.js"



// Within a UL element, map through props.array and return ArtPiece component 

const ArtGallery = (props) => {
    console.log (props.noArt)


    return (
        <>
            <p>Disclaimer: Some of the artworks will not be available due to copyright *looking at you Picasso*</p>
            <h3>The Art!</h3> 
            {props.noArt ? <ul className="overallArtContainer">
                {
                    props.ArtArray.map ((indArt) => (
                        <ArtPiece ArtImage = {indArt}
                        key = {indArt.id}/>
                    ))
                }
                </ul>
                : <p>Uh oh there's no Art. It's been destroyed T_T </p> 
            
                 
            
               
            
                
            }
        </>   
    )
}

export default ArtGallery;