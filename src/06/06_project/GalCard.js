const GalCard = ({cardItem}) => {
    console.log("GalCard cardItem", cardItem)
    return (
        <div className="concard"> 
            <div><img src={cardItem.galWebImageUrl} /></div>
            <div>{cardItem.galTitle}</div>  
            <div className="connm">{cardItem.galPhotographyMonth.substr(0,4)}.{cardItem.galPhotographyMonth.substr(4,2)}.</div> 
            <div className="connm">{cardItem.galPhotographer}</div>  
            <div className="conkw">{cardItem.galSearchKeyword}</div>

        </div>
    ) ;
}

export default GalCard ;
