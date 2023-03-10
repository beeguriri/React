import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RouterHome = () => {

    const navigate = useNavigate();
    const url = {
        'μ¬κ³Όπ' : '/p2?item=μ¬κ³Όπ',               //'μ¬κ³Όπ' : '/p2/μ¬κ³Όπ',
        'λ°λλπ' : '/p2?item=λ°λλπ',
        'λΉκ·Όπ₯' : '/p2?item=λΉκ·Όπ₯'
    }

    //const url = `/p2?item=${item}`;

    const goUrl = (item) => {

        navigate(url[item]);

        //objectλ³μ μμΌμλ

        //navigate(url);
        
        /*  
        if(item==='μ¬κ³Όπ') navigate('/p2?item=μ¬κ³Όπ');
        else if (item==='λ°λλπ') navigate('/p2?item=λ°λλπ');
        else navigate('/p2?item=λΉκ·Όπ₯');
        */
        
    }

    return (

        <>
            <h1>HOME</h1>

            <h2>νλΌλ―Έν° μ μ‘1</h2>
                <ul>
                    <li><Link to='/p1/μ¬κ³Όπ'>apple</Link></li>
                    <li><Link to='/p1/λ°λλπ'>banana</Link></li>
                    <li><Link to='/p1/λΉκ·Όπ₯'>carrot</Link></li>
                </ul>

            <h2>νλΌλ―Έν° μ μ‘2</h2>
            <button onClick={() => {goUrl('μ¬κ³Όπ')}}>μ¬κ³Όπ</button>
            <button onClick={() => {goUrl('λ°λλπ')}}>λ°λλπ</button>
            <button onClick={() => {goUrl('λΉκ·Όπ₯')}}>λΉκ·Όπ₯</button>

        </>
    );
}

export default RouterHome;