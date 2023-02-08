//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

import Galmain from "./Galmain";
import data from './db/data.json';

const Gal = () => {
    
    console.log(data);

    //dataAll : item의 값들 가져오기
    let dataAll = data.response.body.items.item;
    console.log("dataAll", dataAll)
    
    //c1 : 대분류 (galTitle)
    let c1 = dataAll.map((item) => item["galTitle"]);  //"galTitle"의 값을 하나씩 가져와서 배열로 만들어줌
    console.log("key", c1)

    return (
        <>
          <Galmain c1={c1} dataAll={dataAll} />

        </>
    ); 
}

export default Gal ;