import { useState, useEffect, useRef } from "react";

const Mycom = () => {

    const [tag, setTag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();

    //컴포넌트가 처음 랜더링되었을때 커서의 위치
    useEffect(() => {
        txt1R.current.focus();
    },[]);

    //폼에 있는 이벤트를 처리할때는 e.preventDefault()사용
    const checkForm = (e) => {

        e.preventDefault();

        setTag(`입력된 아이디는 ${txt1R.current.value}이고 
                비밀번호는 ${txt2R.current.value}입니다.`);
    };

    return(
        <>
        {/* //form으로 묶어야 reset 눌렀을때 지워짐 */}
        <form name="myform">
            <input ref={txt1R} type="text" name="txt1" placeholder="아이디 입력" />
            <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력" />
            <input type="button" value="확인" onClick={checkForm}/>
            <input type="reset" value="취소" />
        </form>

        <div>
            {tag};
        </div>
        </>
    );
};

export default Mycom;