import { useState, useEffect, useRef } from "react";
//useRef : input box에 포커스 주기위해 사용
//state : 날짜가 선택되면 목록이 랜더링 되게 하기위해
//fetch data의 targetDt=20230214

import BoxofficeList from './BoxofficeList';
import './Boxoffice.css'

const Boxoffice = () => {

    //상영일 선택 state 변수
    const [targetDt, setTargetDt] = useState();

    //인풋박스 제어
    const mvdR = useRef();

    //처음 랜더링 시 인풋박스에 포커스
    useEffect(() => {
        mvdR.current.focus();
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
                    <input type="date" name="mvd" ref={mvdR} onChange={handleMv} />
                </form>
            </div>

            <div className="mvmain">
                <BoxofficeList targetDt={targetDt}/>
            </div>
        </>
    );

}

export default Boxoffice;