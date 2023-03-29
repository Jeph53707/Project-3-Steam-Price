const ArtPiece = (props) => {
    return (
        
        <>
            <h2>This is the ArtPiece</h2>
            <li className="artPieceContainer" key={props.ArtImage.id}>{props.ArtImage.title}</li>
            <img src={props.ArtImage.webImage.url} alt={props.ArtImage.title}/>
        </>
    )
}

//ArtImage.webImage.url is the img src 

export default ArtPiece;