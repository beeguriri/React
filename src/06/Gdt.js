const Gdt = ({selData}) => {

    //console.log("selData.galSearchKeyword", selData.galSearchKeyword)
    return (
        <div className="gdt">
            <div className="detail">
                <ul>
                    <li className="galWebImageUrl"><img src = {selData.galWebImageUrl}></img></li>
                    <li className="galTitle">{selData.galTitle}</li>
                    <li className="galPhotographyLocation">{selData.galPhotographyLocation}</li>
                    <li className="galPhotographer">{selData.galPhotographer}</li>
                    <li className="galPhotographyMonth">{selData.galPhotographyMonth}</li>
                    <li className="galSearchKeyword">{selData.galSearchKeyword}</li>
                </ul>
            </div>
        </div>   
    );

}

export default Gdt;


/*
    let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let dTag;
    dTag = keys.map((k) =>
        <li key={k}>
            <span className={
                k === "galTitle" ? "galTitle" : 
                k==="galPhotographyLocation" ? "galPhotographyLocation" :
                k==="galPhotographer" ? "galPhotographer" : 
                k==="galPhotographyMonth" ? "galPhotographyMonth" : "galSearchKeyword"}>{selData[k]}</span>
        </li>
    );

    dTag.unshift(
        <li key='galWebImageUrl'>
        <span className="imgDt"><img src = {selData["galWebImageUrl"]}></img></span>
        </li>
    )
                <ul>{dTag}</ul>                    {props.pickedContent["galPhotographyMonth"].slice(0,4)}년 {props.pickedContent["galPhotographyMonth"].slice(4,6)}월


*/