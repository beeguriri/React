import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";

const Mydiv1 = ({rname, n, setN}) => {

//    const user = probs.rname;
    let [cnt, setCnt] = useState(0);            //useState 사용하려면 : [변수명, 함수명], 함수형으로 리턴
                                                   //useState에 초기값 줄 수 있음 (괄호에 숫자)

    const addCnt = () => {

        setCnt(++cnt);
//        setN(cnt);              //자식컴퍼넌트에서 바뀌는 값을 부모컴퍼넌트에서도 바뀔 수 있게
//        console.log(cnt);
    }

    useEffect(() => {

        //랜더링이 될때마다 실행
        console.log('변경되었습니다')

    });

    useEffect(() => {

        //최초 한번만 실행
        console.log('Mydiv1의 처음입니다')
        return (
            console.log('종료')
        );

    }, []);


    useEffect(() => {           //스테이트 변수가 바뀌었을때, 행위를 하고싶음!

        console.log('cnt변경으로 n변경')
        setN(++n);

    }, [cnt]);

    return(

        <div className="mydiv1">

            <h2 className="divh2">Mydiv1 {rname} n={n} </h2>

            <Mydiv11 user = {rname} divname = {'사용자정의'+cnt} />

            <div className="divbt">
                <button onClick={addCnt}>💖</button>
                <span>{cnt}</span>
            </div>

        </div>
    );
}

export default Mydiv1;