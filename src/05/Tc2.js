const Tc2 = ({c2}) => {

    console.log('c2[0,1]', c2[0][1]) //횡단중
    console.log('c2[1,1]', c2[1][1]) //차도통행중

    let tc2Tag = [...c2]; //배열의 갯수는 probs의 갯수에 따름 -> 전개연산자(...) 사용

    tc2Tag = tc2Tag.map((v) => 
        <div className="tc2Tag" key={v} >{v[1]}</div>
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