import Mydiv21 from "./Mydiv21";

const Mydiv2 = (probs) => {

    const user = probs.rname;
    const n = probs.n;

    return(

        <div className="mydiv2">
            <h2 className="divh2">Mydiv2</h2>
            <Mydiv21 rname = {user} n = {n} />
        </div>
    );
}

export default Mydiv2;