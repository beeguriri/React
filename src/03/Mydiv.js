import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';
import { useState } from "react";

const Mydiv = () => {                 //리액트의 함수형 컴포넌트는 반드시 대문자로 시작, 파일명과 똑같을 것

    const rname = 'React!!!' ;
    let [n,setN] = useState(0);

    const upN = () => {

        setN (++n)          //Mydiv1에서 바뀐값 + h1 영역 클릭 시 또 n을 증가
    }

    return(

        <div className="content">

            <div className="header">
                <h1 onClick={upN}>Component 예제 {rname} {n} </h1>
            </div>

            <div className="main">
                <Mydiv1 rname = {rname} n = {n} setN = {setN}/>
                <Mydiv2 rname = {rname} n = {n}/>

            </div>

        </div>

    );

}   

export default Mydiv;