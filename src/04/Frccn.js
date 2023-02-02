const Frccn = ({dt, cn}) => {

//    console.log('cn:', cn)
    
    let infoArry = cn.split(',');
    let kn = 0;

    infoArry = infoArry.map((v) =>  //map함수 한줄짜리 리턴함수 : 삼항연산자 이용해서 if/else문 사용가능
        
        v.includes('높음') ?
        <li key = {dt + kn++}>
            <span>{v.split(':')[0]}</span>
            <span className='lired'>{v.split(':')[1]}</span> 
        </li> :
        <li key = {dt + kn++}>{v}</li>
    );

    return (
        <div className="mainbox2">
            <div className='detail'>
                <ul>
                    {infoArry}
                </ul>
            </div>
        </div>
    );

}

export default Frccn;