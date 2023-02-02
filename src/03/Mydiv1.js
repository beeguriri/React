import Mydiv11 from "./Mydiv11";
import { useState } from "react";

const Mydiv1 = (probs) => {

    const user = probs.user;
    let [cnt, setCnt] = useState(0);            //useState 사용하려면 : [변수명, 함수명], 함수형으로 리턴
                                                   //useState에 초기값 줄 수 있음 (괄호에 숫자)

    const addCnt = () => {

        setCnt(++cnt);
        console.log(cnt);
    }

    return(

        <div className="mydiv1">

            <h2 className="divh2">Mydiv1 {user}</h2>

            <Mydiv11 user = {user} divname = {'사용자정의'+cnt} />

            <div className="divbt">
                <button onClick={addCnt}>💖</button>
                <span>{cnt}</span>
            </div>

        </div>
    );
}

export default Mydiv1;