const ArtPiece = (props) => {
    return (
        
        <>
            <li key={props.ArtImage.id} className="artPieceContainer">
                <p>{props.ArtImage.title}</p>
                <img src={props.ArtImage.webImage.url} alt={props.ArtImage.title} />
            </li>

        </>
    )
}



export default ArtPiece;