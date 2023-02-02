const Mydiv21 = (probs) => {

    const user = probs.rname;
    const n = probs.n;
    return(

        <div className="mydiv21">
            <h3 className="divh2">Mydiv21</h3>
            <p>
                {user} {n}
            </p>

        </div>

    );
}

export default Mydiv21;