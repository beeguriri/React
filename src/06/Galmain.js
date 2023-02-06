import Ghead from './Ghead'
import Gc1 from './Gc1'
import Gdt from './Gdt'
import './Galmain.css';
import { useState, useEffect } from "react";

const Galmain = ({c1, dataAll}) => {

    //카테고리 선택
    let [selC1, setSelC1] = useState();

    //상세내용 가져오기
    let [selData, setSelData] = useState({});   //오브젝트를 가져옴

    //카테고리 선택정보 랜더링
    useEffect (()=> {
        console.log("selC1", selC1);
    }, [selC1])

    //선택 된 카테고리에 따라 세부내용 선택
    useEffect (()=> {
        if (selC1) {
            setSelData(dataAll.filter((item) => item.galTitle === selC1)[0])
        }
    }, [selC1])

    //선택 된 세부내용 뿌려줌
    useEffect(()=>{
        console.log("selData",selData);
    },[selData]);


    return(

        <div className="content">
            <div className="header">
                <Ghead />
            </div>

            <div className="main">
                <Gc1 c1 = {c1} selC1 = {selC1} setSelC1 = {setSelC1}/>
                <Gdt selData = {selData} />      
            </div>
        
        </div>


    );

}

export default Galmain;

