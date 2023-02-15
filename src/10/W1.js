import Wheader from "./Wheader";
import keys from '../db/item.json'
import weather1 from '../db/weather2.json'
import { useState, useEffect } from "react";

const W1 = () => {

    //state변수
    //items state 변수는 이 프로젝트의 경우에는 안써도 됨
    //패치되는 jason 데이터 가져올때 사용함
    const [items, setItems] = useState();
    const [itemTag, setItemTag] = useState(); 

    //useEffect
    //랜더링(=함수 재호출) : 함수가 재호출 되면 컴포넌트 변수들이 초기화 (=> ref변수 씀)
    //랜더링이 발생 될 때마다 실행
    //useEffect(() => {});

    //맨처음 컴포넌트 시 실행
    //패치되는 jason 데이터 가져올때 사용
    useEffect(() => {
        setItems(weather1.response.body.items.item);
    },[]);

    //특정 state변수 변경 시 실행
    //처음 랜더링 될때는 items가 undefined 상태이므로 '&&' 연산자로 items가 있을때만 랜더링
    useEffect(() => {

        //undefined 걸러주기
        if (!items) return;

        console.log('items', items);

        let temp = items.map((i,n) => 

            <div className="w1div" key={'w1div'+n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>

        );
        
        setItemTag(temp);

    },[items]);

    // items.map((i,n) =>



    return(
        <>
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            {itemTag}
        </div>
        </>
    );

}

export default W1;
