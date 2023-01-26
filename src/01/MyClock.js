const MyClock = () => {

    return(
        //자바스크립트 코드를 태그안에 쓸수있음
        //시간이 실시간으로 반영이 안됨 (렌더링이 한번만 되므로)
        <div>현재 시간 : {new Date().toLocaleTimeString()} </div>   
    );

}

export default MyClock ;