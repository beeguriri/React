import Mydiv21 from "./Mydiv21";

const Mydiv2 = (probs) => {

    const user = probs.user;

    return(

        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {probs.user}</h2>
            <Mydiv21 user = {user}/>
        </div>
    );
}

export default Mydiv2;