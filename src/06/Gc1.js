const Gc1 = ({c1, selC1, setSelC1}) => {

    //태그 제목 선택 메서드
    const handleSelect = (item) => {
        setSelC1(item);
    };


    //대분류 화면 표시 태그
    let c1Tag = [...c1]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용
    c1Tag = c1Tag.map((item) => 

        <div className={item === selC1 ? "c1Sel" : "c1Tag"} key={item} onClick={()=> handleSelect(item)}> {item} </div>

    );

    return(
        <div className="gc1">
            <div className="box1">
                {c1Tag}
            </div>

        </div>    
    
    );
}

export default Gc1;