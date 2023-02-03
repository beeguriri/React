import Thead from "./Thead";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";
import './Taccidentm.css';

const Taccidentm = ({c1, c2, data}) => {    //probs로 데이터 받아옴

//데이터 넘어오는지 확인    
//    console.log("m_c1", c1);
//    console.log("m_c2", c2);
//    console.log("m_data", data);   

    return(

        <div className="content">
            <div className="header">
                <Thead />
            </div>

            <div className="main">
                <Tc1 c1 = {c1}/>
                <Tc2 c2 = {c2}/>
                <Tdetail />                
            </div>
        </div>
    );
}

export default Taccidentm;