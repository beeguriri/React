const Mydiv11 = (probs) => {

    const user = probs.user;

    console.log("div11", probs);

    return(
    
        <div className="mydiv11">
            <h3 className="divh1">Mydiv11</h3>
            <p>
                {user}
            </p>
            <p>
                {probs.divname}
            </p>

        </div>

    );
}

export default Mydiv11;