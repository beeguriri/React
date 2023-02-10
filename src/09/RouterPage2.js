import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const RouterPage2 = () => {

    /* useLocation 안쓸때
    let location = 'https://n.news.naver.com/article/082/0001197414?cds=news_media_pc&type=editn'
    
    //물음표 기준 뒤의 key값 가져옴
    location = location.split('?')[1];

    let item = qs.parse(location);
    console.log('item', item)      //결과 : {key : value} => {cds: 'news_media_pc', type: 'editn'}
    */

    let location = useLocation().search ;
    console.log('location', location)

    let item = qs.parse(location).item;
    console.log('item', item)

    const fruits = ['사과🍎', '바나나🍌', '포도🍇']; 
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다."

    return(
        <>
            <h1>Page2</h1>        
            <p>{`${item} : ${tag}`}</p>
            
        </>
    );
}

export default RouterPage2;