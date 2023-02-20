const Async = () => {

    const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214';
    fetch(url)
    //.then의 순서로 실행됨
    .then((resp) => resp.json())        //비동기 : 풀필드일때 response를 json데이터로 바꿔줌
    .then((data) => console.log(data))  //비동기 : json데이터가 있을때 object type으로 반환
    .catch((err) => console.log(err))   //리젝트일때 실행

    console.log('커밋확인용')

    return (
        <>
        </>
    );
}

export default Async;