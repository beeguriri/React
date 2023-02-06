import Thead from "./Thead";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";
import './Taccidentm.css';
import { useState, useEffect } from "react";

const Taccidentm = ({c1, c2, data}) => {    //probs로 데이터 받아옴

//데이터 넘어오는지 확인    
//    console.log("m_c1", c1);
//    console.log("m_c2", c2);
//    console.log("m_data", data);   

    /* useState, useEffect
    //처음 한번만 실행
    useEffect(()=>{},[])

    //해당하는 state변수가 변경될때마다 실행
    useEffect(()=>{},[해당하는 state변수명])

    //컴포넌트 랜더링이 일어날때마다 실행
    useEffect(()=>{})
    */

    //선택 된 대분류
    let [selC1, setSelC1] = useState(); //초기값 없음

    //선택 된 대분류에 해당하는 중분류 저장
    let [selC2A, setSelC2A] = useState([]); //배열을 가져옴

    //선택된 중분류
    let [selC2, setSelC2] = useState();

    //선택된 항목
    let [selData, setSelData] = useState({});   //오브젝트를 가져옴

    //선택 된 C1에 따라 해당되는 C2의 배열 가져옴
    useEffect(() => {
        console.log("sclC1", selC1);
        //선택된 항목 골라오는거 : filter
        setSelC2A(c2.filter((i) => i[0] === selC1));

    }, [selC1]);

    //중분류 선택
    useEffect (()=> {
        console.log("selC2A", selC2A);
    }, [selC2A])

    //선택 된 중분류에 따라 세부내용 가져옴
    useEffect (()=> {
        console.log("selC2", selC2);
        if (selC1 && selC2) {
            setSelData(data.filter((item)=>(item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2))[0])
        }

    }, [selC2])

    //선택 된 세부내용 뿌려줌
    useEffect(()=>{
//        console.log("selData",selData);
    },[selData]);


    return(

        <div className="content">
            <div className="header">
                <Thead />
            </div>

            <div className="main">
                <Tc1 c1 = {c1} selC1 = {selC1} setSelC1 = {setSelC1}/>
                {selC2A && <Tc2 selC2A = {selC2A} selC2 = {selC2} setSelC2 = {setSelC2}/>}
                {selData && <Tdetail selData = {selData} selC2 = {selC2}/>}
            </div>
        </div>
    );
}

export default Taccidentm;