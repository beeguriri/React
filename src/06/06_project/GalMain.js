import data from '../db/data.json';
import Ghead from './Ghead';
import GalCard from './GalCard';
import './GalMain.css';
import { useRef, useState, useEffect } from 'react';

const GalMain = () => {

    //데이터 가져오기
    const items = data.response.body.items.item;    //type : 오브젝트의 배열
    const c1 = items.map((obj) => obj.galTitle);
    
    //랜더링 제어변수
    const [selC1, setSelC1] = useState();
    const [c1tag, setC1Tag] = useState();
    const [selItem, setSelItem] = useState();

    //검색창 제어
    const txtR = useRef();

    //컴포넌트가 처음 랜더링이 일어났을때 한번만 실행
    useEffect(() => {
        txtR.current.focus();

        setC1Tag(c1.map((item) => 
        <li className={item === selC1 ? "c1Sel" : "c1Tag"} key={item} 
            onClick={()=> handleSearch(item)}> {item} </li>))
    },[]);

    //태그 선택 함수
    const handleSearch = (item) => {
        setSelC1(item);
    };

    //제목으로 검색 된 태그 보여줌
    const showC1 = () => {

        let temp = c1.filter((i)=> i.includes(txtR.current.value))

        setC1Tag(
            temp.map((item) => 
            <li className={item === selC1 ? "c1Sel" : "c1Tag"} key={item} 
                onClick={()=> handleSearch(item)}> {item} </li>
        ));
    }

    //카테고리 선택정보 랜더링
    useEffect (()=> {
        console.log("selC1", selC1);
    }, [selC1])

    //선택 된 카테고리에 따라 세부내용 선택
    useEffect (()=> {
        if (selC1) {
            setSelItem(items.filter((item) => item.galTitle === selC1)[0]);
        }
    }, [selC1])

    //세부내용 선택될 떄 마다 랜더링
    useEffect(()=>{
        console.log("selItem",selItem);
    },[selItem]);

    //select box 제어
    const selR = useRef();

    //select box의 옵션태그 만들기
    const optionTag = c1.map((item) => 
        <option value={item} key={item}>{item}</option>
    );   

    //셀렉트박스 선택시 value값 리턴
    const handleSel = (e) => {
        e.preventDefault();
        console.log("onCahnge => selR", selR.current.value)
        //if(selR.current.value==="") return;
        let temp = items.filter((item) => item.galTitle === selR.current.value);
        console.log("onCahnge temp", temp)
        setSelItem(temp[0]);
    };

    return(
        <div className="content">

            <div className="header">
                <Ghead />
            </div>               

            <div className="main">
            <div className="conleft">
                <div className="formbox">
                    <form>
                        <div className="selbox">
                            <select ref={selR} name="sel1" onChange={handleSel}>
                                <option value="" defaultValue>항목을 선택하세요</option>
                                {optionTag}
                            </select>
                        </div>

                        <div className="textbox">
                            <input ref={txtR} type="text" name="txt1" onChange={showC1} placeholder="검색어를 입력하세요." />
                            <button type="reset" className="textbox">취소</button>
                        </div>
                    </form>
                </div>

                <div className="tagbox">
                    <ul>
                        {c1tag}
                    </ul>
                </div>
            </div>

            <div className="conright">

                {selItem && <GalCard cardItem = {selItem} />}

            </div>
            </div>
        </div>                
    );
};

export default GalMain;
