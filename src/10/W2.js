import Wheader from "./Wheader";
//import keys from '../db/item.json'
import weather2 from '../db/weather.json'
import { useEffect, useState } from "react";

// rnSt3Am : 3일 후 오전 강수 확률, rnSt3Pm : 3일 후 오후 강수 확률 3~7
// wf3Am : 3일 후 오전 날씨예보, wf3Pm : 3일 후 오후 날씨예보 3~7
// rnSt8, wf8 : 8~10일 후 강수확률, 날씨예보

const W2 = () => {

    //console.log('weather2', weather2)

    const items = weather2.response.body.items.item;
    console.log('items', items)
    console.log('items[ky]', items[0].rnSt3Am)

    //클릭되는 버튼에 따라 상세내용 바꾸기 위하여
    let [day, setDay] = useState(3);

    useEffect(() => {
        console.log("day", day);
    },[day])

    //버튼 클릭하면 day값 생김
    const showW2 = (day) => {
        setDay(day);
    }

    //day값에 따른 키 생성
    let keyDay = [`rnSt${day}Am`, `rnSt${day}Pm`, `wf${day}Am`, `wf${day}Pm`]
    console.log('keyDay', keyDay)

    //각 키값에 따른 item 매칭
    let w2 = [];
    for(let k of keyDay) {
        w2.push(items[0][k]);
    }

    console.log('w2', w2)

    let w2list = w2.map((item) => 

        <div className="w2div" key={item[0]}>
            <ul>
                <li className="day">{day}일 후</li>
                <li>날씨예보</li>
                <li className="data">{item}</li>
            </ul>
        </div>
    );

    return(
        <>
            <div className="content">

                <Wheader title={'일기예보-장기'} />

                <div className="w2btn">
                    <button className="btn" onClick={(e) => {e.preventDefault(); showW2(3)}}>3일후 날씨</button>
                    <button className="btn" onClick={(e) => {e.preventDefault(); showW2(4)}}>4일후 날씨</button>
                    <button className="btn" onClick={(e) => {e.preventDefault(); showW2(5)}}>5일후 날씨</button>
                    <button className="btn" onClick={(e) => {e.preventDefault(); showW2(6)}}>6일후 날씨</button>
                </div>

                <div className="w2">
                    <div className="w2div"> 
                        <ul>
                            <li className="day">{day}일 후</li>
                            <li className="day2">오전 강수량</li>
                            <li className="data">{w2[0]}%</li>
                        </ul>
                        <ul>
                            <li className="day">{day}일 후</li>
                            <li className="day2">오후 강수량</li>
                            <li className="data">{w2[1]}%</li>
                        </ul>
                        <ul>
                            <li className="day">{day}일 후</li>
                            <li className="day2">오전 날씨예보</li>
                            <li className="data">{w2[2]}</li>
                        </ul>
                        <ul>
                            <li className="day">{day}일 후</li>
                            <li className="day2">오후 날씨예보</li>
                            <li className="data">{w2[3]}</li>
                        </ul>

                        w2list 만드는중
                        {w2list}
                    </div>


                </div>
            </div>
        </>
    );
}

export default W2;
