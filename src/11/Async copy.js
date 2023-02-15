const Async = () => {

    const funcA = () => {

        console.log('함수명령');
    }
    
    console.log('명령1');
    funcA();
    console.log('명령2');

    setTimeout(() => {
        console.log('timeout명령1');

        setTimeout(() => {
            console.log('timeout명령2');

            setTimeout(() => {
                console.log('timeout명령3');
            }, 500);

        }, 100);

    }, 1000);

    console.log('명령3');

    /* 결과
    명령1 > 함수명령 > 명령2 > 명령3 > timeout명령1 > timeout명령2 > timeout명령3 */

    return (
        <>
        </>
    );
}

export default Async;