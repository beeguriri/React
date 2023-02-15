import { useState, useEffect } from "react";

const BoxofficeList = ({targetDt}) => {
    
    const [mvList, setMvList] = useState();

    //맨처음 랜더링 시
    useEffect(() => {
        if(!targetDt) return;
        const apikey = 'dd5b0afc0511d7102b761b9afc283a08';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

        console.log(url)

        //fetch로 데이터 받아오기
        fetch(url)
        .then((resp) => resp.json())
        .then((data)=>{

            console.log(data.boxOfficeResult.dailyBoxOfficeList)
            
        })
        .catch((err)=>console.log(err))

    },[]);

    return(
        <>
            <div>
                {targetDt && mvList}
            </div>

            <div>
                상세내용
            </div>
        </>
    );

}

export default BoxofficeList;