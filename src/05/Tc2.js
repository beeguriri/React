const Tc2 = ({selC2A, selC2, setSelC2}) => {

    //console.log('c2[0,1]', c2[0][1]) //횡단중
    //console.log('c2[1,1]', c2[1][1]) //차도통행중

    //중분류가 선택되었을때
    const handleSelect = (item) => {
        console.log("SelC2", item)
        setSelC2(item[1]);
    };

    let tc2Tag = [...selC2A]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용

    tc2Tag = tc2Tag.map((item) => 
        <div className={item[1] === selC2 ? "tc2Sel" : "tc2Tag"} key={[...item]} onClick={()=> handleSelect(item)}>{item[1]}</div>

    );

    return(

        <div className="tc2">
                <h2>중분류</h2>

            <div className="box2">
                {tc2Tag}
            </div>

        </div>
    );

};

export default Tc2;