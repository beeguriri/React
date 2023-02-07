import { useState, useEffect, useRef } from "react";

const Mycom = () => {

    //컴포넌트 내부 변수, 랜더링이 되면 초기화
    let cnt1 = 0;

    //state 변수, 변수가 변할때마다 랜더링
    const [cnt2, setCnt2] = useState(0);

    //ref 변수, 변수가 변하고 있다가 어느 시점에 한번만 랜더링이 일어나고 싶을때
    const cnt3 = useRef(0);

    //함수
    const showCnt = () => {
        console.log(`cnt1 = ${cnt1}`);  //로컬변수는 랜더링이 되면 초기화 됨
        console.log(`cnt2 = ${cnt2}`);  //state변수는 변수값이 변할때 마다 랜더링
        console.log(`cnt3 = ${cnt3.current}`);  //ref변수는 변수값이 변하지만 랜더링은 되지 않음, 
                                                //state변수로 랜더링 되어도 변수값 초기화 되지않고 변수값이 나옴
    };

    //함수에서 바로 변경
    const addCnt1 = () => {
        cnt1 = cnt1 +1;
        showCnt();
    };

    //set함수로 변경 후 useEffect로 랜더링
    const addCnt2 = () => {
        setCnt2(cnt2 + 1);
    };

    useEffect(() => {
        showCnt();
    },[cnt2])

    //
    const addCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    };

    return(
        <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt3 = {cnt3.current}</li>

            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}/> 
                <input type="button" value="cnt2증가" onClick={addCnt2}/> 
                <input type="button" value="cnt3증가" onClick={addCnt3}/> 
            </form>
            
        </>
    );
};

export default Mycom;