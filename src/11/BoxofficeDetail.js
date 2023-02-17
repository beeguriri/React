import { useState, useEffect } from "react";

const BoxofficeDetail = ({movieCd}) => {

    console.log('BoxofficeDetail', movieCd);
    const [mTag, setMTag] = useState();

    //async 함수를 써야함!
    const getData = async() => {

        const apikey = 'dd5b0afc0511d7102b761b9afc283a08';
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log('dat', data);       //데이터타입 : 오브젝트

            let temp = data.movieInfoResult.movieInfo; 
            let keys = {'영화명':'movieNm', 
                        '개봉일':'openDt',
                        '제작상태':'prdtStatNm',
                        '영화형태':'typeNm',
                        '감독':'directors'}

            let tags = [];                
            for(let [k, v] of Object.entries(keys)) {
                
                if (k==='감독') {
                    <div key={k}>
                    <span>{k}</span>
                    <span>{temp[v][0]}</span>
                    </div>

                }
                else {tags.push(
                    <div key={k}>
                        <span>{k}</span>
                        <span>{temp[v]}</span>
                    </div>
                )}
                
            }

            setMTag(tags);

            console.log('temp', temp)

        }
        catch(err) {
            console.log(err);
        }
    }
    
    //최초 랜더링 시
    useEffect(() => {
        setMTag(movieCd);
    },[]);

    useEffect(() => {
        getData();
    },[movieCd]);

    /*
    //movieCd 선택 되었을 때 실행
    useEffect(() => {
        
        if(!movieCd) return; 

        const apikey = 'dd5b0afc0511d7102b761b9afc283a08';
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apikey}&movieCd=${movieCd}`;

        fetch(url)
        .then((resp) => resp.json())    
        .then((data)=>{                 

            console.log('fetch내', data)
            let temp = data.movieInfoResult.movieInfo;
            //console.log('temp', temp)

            temp = Object.entries(temp).map((item) => {

                console.log('item0', item[0])
                console.log('item1', item[1])
            })


            setMvDetail(temp);

        })
        .catch((err)=>console.log(err))

    },[movieCd]);

*/
    return(
        <>
            <ul>
                {movieCd && mTag}
            </ul>
        </>
    );
}

export default BoxofficeDetail;