import Ghead from './Ghead'
//import Gc1 from './Gc1'
import Gdt from './Gdt'
import './Galmain.css';
import { useState, useEffect, useRef } from "react";

const Galmain = ({c1, dataAll}) => {

    //카테고리 선택
    let [selC1, setSelC1] = useState();

    //상세내용 가져오기
    let [selData, setSelData] = useState();   

    //ref 변수 선언
    const txtR = useRef();

    //맨처음 한번 실행될때 포커스
    useEffect(()=> {
        txtR.current.focus();
    },[])

    //태그 선택 함수
    const handleSelect = (item) => {
        setSelC1(item);
    };

    //카테고리 선택정보 랜더링
    useEffect (()=> {
        console.log("selC1", selC1);
    }, [selC1])

    //선택 된 카테고리에 따라 세부내용 선택
    useEffect (()=> {
        if (selC1) {
            setSelData(dataAll.filter((item) => item.galTitle === selC1)[0]);
        }
    }, [selC1])

    //선택 된 세부내용 뿌려줌
    useEffect(()=>{
        console.log("selData",selData);
    },[selData]);


    //검색결과에 따라 카테고리 보여줌
    const [c1tag, setC1Tag] = useState();

    const showC1 = () => {

        //console.log(txtR.current.value)

        let temp = c1.filter((i)=> i.includes(txtR.current.value))

        setC1Tag(
            temp.map((item) => 
            <div className={item === selC1 ? "c1Sel" : "c1Tag"} key={item} onClick={()=> handleSelect(item)}> {item} </div>
        ));

    }

    return(

        <div className="content">
            <div className="header">
                <Ghead />
            </div>

            <div className="main">
                <div className="contleft">
                    <div className="formbox">
                        <form>
                            <input ref={txtR} type="text" name="txt1" onChange={showC1} placeholder="검색어를 입력하세요."/>
                            <button type="reset">취소</button>
                        </form>
                    </div>

                    <div className="gc1">
                        <div className="box1">
                            {c1tag}
                        </div>
                    </div>
                </div>

                <div className="contright">
                    {selData && <Gdt selData = {selData} />}
                </div>

            </div>
        </div>


    );

}

export default Galmain;

