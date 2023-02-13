import { Link } from "react-router-dom";

const Wheader = ({title}) => {

    return(
        <>
            <div className="wheader">
                <h1>{title}</h1>
                <div className="hbt"><Link to="/">🏠홈으로</Link></div>
            </div>
        </>
    );
}

export default Wheader;