const GalCard2 = ({selData}) => {

    return (
            <div className="detail">
                <ul>
                    <li className="galWebImageUrl"><img src = {selData.WebImageUrl} /></li>
                    <li className="galTitle">{selData.Title}</li>
                    <li className="galPhotographyMonth">{selData.Month.substr(0,4)}.{selData.Month.substr(4,2)}.</li>
                    <li className="galPhotographer">{selData.Photographer}</li>
                    <li className="galSearchKeyword">{selData.SearchKeyword}</li>
                </ul>
            </div>
    );

}

export default GalCard2;
