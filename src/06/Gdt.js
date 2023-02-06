const Gdt = ({selData}) => {

    let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let dTag;

    dTag = keys.map((k) =>
        <li key={k}>
            <span className={
                k === 'galTitle' ? "galTitle" : 
                k==="galPhotographyLocation" ? "galPhotographyLocation" :
                k==="galPhotographer" ? "galPhotographer" : 
                k==="galPhotographyMonth" ? "galPhotographyMonth" : "galSearchKeyword"}>{selData[k]}  </span>
        </li>
    );

    dTag.unshift(
        <li key='galWebImageUrl'>
        <span className="imgDt"><img src = {selData["galWebImageUrl"]}></img></span>
        </li>
    )


    return (
        <div className="gdt">
            <div className="detail">
                <ul>{dTag}</ul>
            </div>

        </div>   
    );

}

export default Gdt;