import { useState, useEffect } from "react";

const BoxofficeDetail = ({movieCd}) => {

    //console.log('BoxofficeDetail', movieCd);
    const [mTag, setMTag] = useState();

    //async 함수를 써야함!
    const getData = async() => {

        const apikey = 'dd5b0afc0511d7102b761b9afc283a08';
        let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            //console.log('dat', data);       //데이터타입 : 오브젝트

            let temp = data.movieInfoResult.movieInfo; 
            let keys = {'영화명':'movieNm', 
                        '영화명(영어)':'movieNmEn',   
                        '개봉일':'openDt',
                        '감독':'directors',
                        '영화구분':'typeNm',                        
                        '상영시간' : 'showTm'}

            let tags = [];                
            for(let [k, v] of Object.entries(keys)) {
                
                if (k==='감독') {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}>{k}</span>
                            <span className="sp1" key={temp[v][0].peopleNm}>{temp[v][0].peopleNm}</span>
                        </div>
                    )
                }
                else if (k==='영화명') {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}>{k}</span>
                            <span className="sp11" key={temp[v]}>{temp[v]}</span>
                        </div>
                    )
                }
                else if (k==='영화명(영어)') {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}> </span>
                            <span className="sp12" key={temp[v]}>{temp[v]}</span>
                        </div>
                    )
                }
                else if (k==='개봉일') {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}>{k}</span>
                            <span className="sp12" key={temp[v]}>{temp[v].substr(0,4)}. {temp[v].substr(4,2)}. {temp[v].substr(6,2)}.</span>
                        </div>
                    )
                }
                else if (k==='상영시간') {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}>{k}</span>
                            <span className="sp1" key={temp[v]}>{temp[v]}분</span>
                        </div>
                    )
                }
                else {
                    tags.push(
                        <div className="row" key={k}>
                            <span className="sp0" key={k}>{k}</span>
                            <span className="sp1" key={temp[v]}>{temp[v]}</span>
                        </div>
                    )
                }
                
            }

            setMTag(tags);

 //           console.log('temp', temp)

        }
        catch(err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        getData();
    },[movieCd]);

    return(
        <>
            <ul>
                {movieCd && mTag}
            </ul>
        </>
    );
}

export default BoxofficeDetail;