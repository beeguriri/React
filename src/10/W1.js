import Wheader from "./Wheader";
import keys from '../db/item.json'
import weather1 from '../db/weather2.json'

const W1 = () => {

//    console.log('weather1', weather1)
//    console.log('keys', keys)

    let items = weather1.response.body.items.item;
//    console.log('items', items) : item 8개

    //화면 출력용 배열 만들고자 함
    //map의 return함수 사용
    let w1 = items.map((i) => {
        
        let temp = [];
        temp.push(keys[i.category][0]); //items의 category에 해당하는 key값(배열) => index 0번째 값
        temp.push(i.obsrValue);         //itmes의 obsrBalue값(obj)
        temp.push(keys[i.category][1]); //items의 category에 해당하는 key값(배열) => index 1번째 값
        return temp;
    });

//    console.log('w1', w1);
//    console.log('w1[0]', w1[0]);

    let w1list = w1.map((item) => {

        if(item[2] === "코드값")
            return <div className="w1div" key={item[0]}>
                        <span className="sp0">{item[0]}</span>
                        <span className="sp1">없음</span>
                        <span className="sp2"></span>
                    </div>

        return <div className="w1div" key={item[0]}>
                        <span className="sp0">{item[0]}</span>
                        <span className="sp1">{item[1]}</span>
                        <span className="sp2">{item[2]}</span>

                </div>
    });


    return(
        <>
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            
            <div className="w1">
                {w1list}
            </div>
        </div>
        </>
    );

}

export default W1;
