const Tc1 = ({c1, selC1, setSelC1}) => {

    //대분류가 클릭되었을 때
    const handleSelect = (item) => {

        setSelC1(item);

    };

    //대분류 화면 표시 태그
    let tc1Tag = [...c1]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용
    tc1Tag = tc1Tag.map((item) => 

        <div className={item === selC1 ? "tc1Sel" : "tc1Tag"} key={item} onClick={()=> handleSelect(item)}>
            {item}
        </div>
    );

    return(

        <div className="tc1">
            <h2>대분류</h2>

            <div className="box1">
                {tc1Tag}
            </div>

        </div>
    );

};

export default Tc1;