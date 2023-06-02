import { useState, useEffect } from "react";

const BoxofficeDetail = ({movieCd}) => {

    console.log('BoxofficeDetail', movieCd);
    const [mTag, setMTag] = useState();

    //async 함수를 써야함!
    const getData = async() => {

        const apikey = '';
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log('dat', data);       //데이터타입 : 오브젝트

            let temp = data.movieInfoResult.movieInfo; 
            let keys = {'영화명':'movieNm', 
                        '개봉일':'openDt',
                        '제작상태':'prdtStatNm',
                        '영화구분':'typeNm',
                        '감독':'directors'}

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
