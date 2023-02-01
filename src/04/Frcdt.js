const Frcdt = ({dt, setDt}) => {

    //console.log('probs.frcdt :', probs.frcdt)
    //probs : frcdt (날짜데이터)

    let dtdiv1Tag = [...dt]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용

    const show = (v) => {
        console.log("show", v)
        setDt(v);
    }
    
    //배열이니까 맵을 돌자
    dtdiv1Tag = dtdiv1Tag.map( (v) => 

        <div className="dtdiv1" key={v} onClick={() => show(v)}>{v}</div>
    );

    //console.log('dtdiv1Tag :', dtdiv1Tag)

    return (
        <div className="mainbox1">
            <ul>
                {dtdiv1Tag}
            </ul>
        </div>
    );
}

export default Frcdt;