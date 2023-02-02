import './Frcst.css';
import Frcheader from './Frcheader'
import Frcdt from './Frcdt'
import Frccn from './Frccn'
import { useState, useEffect } from 'react';

const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

//    let [cn, setCn] = useState() ;

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
    ]

    //키로 사용할 배열을 만들어줌
    let frcdt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];    
    let frccn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    //map함수 사용 map( () => 한줄짜리 명령 )
    //key값이 돌면서 items[0]번째의 key값을 찾아서 배열로 만들어줌
    frcdt = frcdt.map((k) => items[0][k]) ; 
    frccn = frccn.map((k) => items[0][k]) ; 

 //   console.log(frcdt);
 //   console.log(frccn);

    //일자별 예보 오브젝트 생성(key : frcdt, value : frccn)
    let frcobj = {};

    //배열.entries() : 배열의 인덱스를 뽑아냄
    for (let [idx, k] of frcdt.entries()) {
//      console.log('idx=', idx, 'key_value=', k, 'cn_value=', frccn[idx]);
        frcobj[k] = frccn[idx];
    }

//  console.log('fcrobj :', frcobj)

    /*forEach(() => {}) 함수 사용
    const obj = {};

    frcdt.forEach((k, idx) => {
      obj[k] = frccn[idx];
    });
    
    console.log('obj :', obj);
    */  
    
    //state함수 사용
    let [cn, setCn] = useState(frccn[0]) ;  
    let [dt, setDt] = useState() ;

    //날짜가 변경되면 useEffect 실행
    
    useEffect(() => {
//        console.log('useeffect', frcobj[dt]);

        //처음에 dt에 값이 없으므로 && 뒤에 실행 안함
        //dt 찍으면 [dt]가 바뀌고, dt에 값이 생기므로 && 뒤에 실행 -> setCn으로 cn도 바꿈
        //dt 정의되지않으면 setCn에 내용 안나타나게 하기위하여
        frcobj[dt] && setCn(frcobj[dt]);

    }, [dt]);

    return (
        <>
            <Frcheader />

            <div className="main">
                <Frcdt frcdt = {frcdt} setDt = {setDt}/>
                {dt && <Frccn dt = {dt} cn = {cn}/>}
            </div>
        </>
    ) ;
}

export default Frcst ;