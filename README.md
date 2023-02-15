## React Project 1 : 시계만들기
+ https://reactclock-209e7.web.app/

## React Project 2 : 한국관광공사 관광사진정보 
+ ### https://visitkoreaphoto-3e987.web.app 
+ 관련파일 : React/src/06/06-project
+ 호스팅버전 : ver4.0 / 2023.02.10.
+ GalTilte 선택하면 해당 세부내용 나타남
  + 초기화면에서 TagList 선택
  + 셀렉트박스에서 List 선택
  + 텍스트박스에서 검색 결과 TagList 선택
+ 수정 필요한 것
  + 검색 후 취소 버튼 누르면 TagList 초기화 (맨처음에 목록 다 나오게)
  + TagList가 선택될 경우 className 달라지게 설정해놨는데 안먹힘
<hr>

## Folder Index

+ 01 : 시계만들기
+ 02 : 박스오피스 (useState() 사용)
+ 03 : probs, useState 실습
+ 04 : 미세먼지예보
  + json데이터 object -> array -> object, map 사용 
  + probs 사용
  + useState, useEffect 사용
+ 05 : 교통사고 유형별 사고현황
  + 필요한 데이터 형태로 가공 object <-> array
  + 대분류 -> 중분류 선택한 값이 detail에 뜨도록 함
+ 06 : 한국관광공사 관광사진정보
  + #### 06-project : `hosting`
  + 06-1 : 교수님 코드 (참고용)
  + db : Gal.js 내 jason데이터 옮겨놓기
  + jason object데이터 가져오기
  + #### Galmain, Gc1, Gdt
    + 카테고리 선택하면 해당 값이 detail에 뜸
    + image url을 가지고 페이지에서 사진으로 뿌려주기
    + 각 list별 폰트 사이즈 등등 다르게 하기
    + useRef사용, 카테고리 검색박스 만들기
  + #### GalSelect
    + selectbox, useRef사용
+ 07 : useState, useEffect, useRef, form 사용
+ 08 : form태그, useRef로 form value 가져오기
+ 09 : Route, Link, Navigate 사용
  + #### App.js : `import {BrowserRouter}`
    + `<BrowserRouter></BrowserRouter>`
  + #### RouterMain.js : `import {Route, Routes}`
    + `<Routes><Route path="url표시" element={연결할 컴포넌트}/></Route></Routes>`
  + #### RouterNv.js : `import {Link}`
    + `<Link to="url"></Link>`
  + #### RouterHome.js : `import { useNavigate }`
    + `const navigate = useNavigate()`
    + `navigate(url[item])`
  + #### RouterPage1.js : `import { useParams }`
  + #### RouterPage2.js : `import { useLocation }` `qs`
+ 10 : 날씨예보
  + 장기예보, 단기예보 정보 가져오기
  + Route, Link 사용
+ 11 : 박스오피스
  + 실시간 api 파일 가져오기 (fetch 이용)
+ db : json 파일 저장

##      
  + Local Path D:\HJ\React\Work\lecreact
  + #### `npm start`  
  + #### `npm run build`  `firebase deploy`
