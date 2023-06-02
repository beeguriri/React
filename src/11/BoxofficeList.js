import { useState, useEffect } from "react";
import BoxofficeDetail from './BoxofficeDetail';

const BoxofficeList = ({targetDt}) => {
    
    const [mvList, setMvList] = useState();
    const [movieCd, setMovieCd] = useState();

    const handleDivClick = (selmv) => {
       console.log('sel_movieCd', selmv);     
       setMovieCd(selmv);            
    }

    //targetDT 선택 되었을 때 실행
    useEffect(() => {
        
        //부모 컴포넌트에서 &&연산자로 표시해줬으므로 필요없는 코드
        //if(!targetDt) return; 

        const apikey = '';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

        //console.log(url)

        //fetch로 데이터 받아오기 (비동기방식으로 처리) - Ajax 통신
        //(pomise 객체 반환)
        //응답이 오는동안 pending상태로 대기 (그동안 다른 작업들 수행함)
        //fulfilled 상태가 되면 .then으로 돌아와서 실행
        //json형태로 받도록 요청 => promise가 끝나면 아래 .then 처리
        //.then으로 chaining => 개선 : aysncaway문법
        fetch(url)
        .then((resp) => resp.json())    
        .then((data)=>{                 

            //console.log('fetch내', data.boxOfficeResult.dailyBoxOfficeList)  
            let temp = data.boxOfficeResult.dailyBoxOfficeList;

            temp = temp.map((item) => {

                return (
                
                    <div className="row" key={item.movieNm} onClick={() => handleDivClick(item.movieCd)}>
                        <span className="sp0">{item.rank}</span>
                        <span className="sp1">{item.movieNm}</span>
                        <span className="sp2">{parseInt(item.audiCnt).toLocaleString('ko-KR')}</span>
                    </div>
                );

            })
            
            setMvList(temp);

        })
        .catch((err)=>console.log(err))

    },[targetDt]);

    //mvCd가 선택되면 랜더링
    useEffect(() => {

        if(!movieCd) return; 

    },[movieCd]);

    return(
        <>
            <div className="conleft">
                <div className="rowh">
                    <span className="sp0">순위</span>
                    <span className="sp1">영화명</span>
                    <span className="sp2">관객수</span>
                </div>
                {targetDt && mvList}
            </div>

            <div className="conright">
                <BoxofficeDetail movieCd = {movieCd} />
            </div>
        </>
    );

}

export default BoxofficeList;
