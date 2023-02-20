import { useState, useEffect, useRef } from "react";
//useRef : input box에 포커스 주기위해 사용
//state : 날짜가 선택되면 목록이 랜더링 되게 하기위해
//fetch data의 targetDt=20230214

import BoxofficeList from './BoxofficeList';
import './Boxoffice.css'

const Boxoffice = () => {
    
    //맨처음 화면에는 어제날짜와 박스오피스 정보 랜더링
    //날짜 선택 시 해당 날짜의 박스오피스 랜더링
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate()-1));
    //console.log('yesterday', yesterday)

    const dfday = yesterday.toISOString().slice(0, 10);
    //console.log('defday', dfday);
    
    //상영일 선택 state 변수
    const [targetDt, setTargetDt] = useState(dfday);

    //인풋박스 제어
    const mvdR = useRef();

    //처음 랜더링 시 인풋박스에 포커스
    useEffect(() => {
        mvdR.current.focus();
        console.log('처음 랜더링 targetDt', targetDt)
        setTargetDt(mvdR.current.value.replaceAll('-',''));

    }, []);

    //targetDt 변경 시
    useEffect ( () => {
        console.log('targetDt', targetDt)
    },[targetDt]);

    //인풋박스 이벤트
    const handleMv = () => {
        console.log(mvdR.current.value); 

        //targetDt로 줘야하는 값 (-기호는 빼고 전달해야함)
        setTargetDt(mvdR.current.value.replaceAll('-',''));
    };

    return(
        <>
            <div className="mvhead">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdR} onChange={handleMv} defaultValue={dfday} />
                </form>
            </div>

            <div className="mvmain">
                {targetDt && <BoxofficeList targetDt={targetDt}/>}
            </div>
        </>
    );

}

export default Boxoffice;