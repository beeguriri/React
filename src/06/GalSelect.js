import data from '../06/db/data.json';
import GalCard from './GalCard';
//import GalCard2 from './GalCard2';
import './GalSelect.css';
import { useRef, useState, useEffect } from 'react';

const GalSelect = () => {

    //데이터 가져오기
    const items = data.response.body.items.item;    //type : 오브젝트의 배열
    const c1 = items.map((obj) => obj.galTitle);    
    
//    console.log("items", items);
//    console.log("c1", c1);

    //select box 제어
    const selR = useRef();
    //console.log("selR", selR.current) : 결과 'undefined'
    //select box의 옵션태그 만들기
    const optionTag = c1.map((item) => 
        <option value={item} key={item}>{item}</option>
    );   

    //컴포넌트가 처음 랜더링이 일어났을때 한번만 실행
    //랜더링이 끝나고 useEffect가 실행되므로
    //셀렉터가 콘솔창에 들어옴
    useEffect(() => {
        selR.current.focus();
        console.log("selR", selR.current)
    },[]);

    //셀렉트박스 선택시 value값 리턴
    const handleSel = (e) => {
        e.preventDefault();
        console.log("onCahnge => selR", selR.current.value)
        //if(selR.current.value==="") return;
        let temp = items.filter((item) => item.galTitle === selR.current.value);
        console.log("onCahnge temp", temp)
        setSelItem(temp[0]);
    };

    //선택 된 값에 따라 상세내용 바꿔야 됨
    //랜더링 제어변수
    const [selItem, setSelItem] = useState();

    return(
        <div className="content">                
            <div className="conright">

                <form>
                    <select ref={selR} name="sel1" onChange={handleSel}>
                        <option value="" defaultValue>항목을 선택하세요</option>
                        {optionTag}
                    </select>
                </form>

                {selItem && <GalCard cardItem = {selItem} />}

            </div>
        </div>                
    );
};

export default GalSelect;



    /* item 다 뽑아올떄는 map을 돌리자!
    const itemTag = items.map((item) => 
    
        <Gdt selData = {item} />
    );
    */



    /*  web에서 아이템 따올때
    const item = {
        
        WebImageUrl : 'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fshop.phinf%2F20230201_134%2F1675248109062iqh1N_JPEG%2Ftg.jpg%22&type=nf340_228',
        Title : '계절의 아름다움을 기록, 플로리스트의 집',
        Month : '202302',
        Photographer : '화사계(花四季) 하우스',
        SearchKeyword : '인테리어, 랜선집들이',
    }
        return ( <GalCard2 selData = {item} /> );
        

    */

        /*
            const [selItem, setSelItem] = useState( {} ); //초기 오브젝트가 undefined 된 상태로 있으므므로

            return (

            {Object.kyes(selItem).length > 0 && <GalCard cardItem = {selItem} />}

            )

        */