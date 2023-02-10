import Wheader from "./Wheader";
import { Link } from "react-router-dom";

const Wmenu = () => {

    return(
        <>
        <div className="content">
            <Wheader title={'일기예보'} />
            <div className="menubox">
                <ul>
                    <li><Link to="/w1">단기예보</Link></li>
                    <li><Link to="/w2">장기예보</Link></li>
                </ul>
            </div>
        </div>
        </>
    );

}

export default Wmenu;