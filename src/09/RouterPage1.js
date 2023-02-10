import { useParams } from "react-router-dom";

const RouterPage1 = () => {

    const item = useParams().item;
    console.log('p1 item', item)
    //Main에서 <Route path="/p1/:item">
    //Home에서 <Link to='/p1/사과🍎'> 여기의 사과가 파라미터로 넘어감

    const fruits = ['사과🍎', '바나나🍌', '포도🍇']; //..배열은 계속 추가할 수 있음
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다."

    /*
    if(fruits.includes(item)) tag = "과일입니다";
    else tag = "과일이 아닙니다.";
    */

    return (
        <>
            <h1>Page1</h1>
            <p>{`${item} : ${tag}`}</p>
        </>
    );
}

export default RouterPage1;