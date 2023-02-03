const Tc1 = ({c1}) => {

    let tc1Tag = [...c1]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용
    tc1Tag = tc1Tag.map((v) => 

        <div className="tc1Tag" key={v} >{v}</div>
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