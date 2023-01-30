const Mydiv21 = (probs) => {

    const user = probs.user;
    return(

        <div className="mydiv21">
            <h3 className="divh2">Mydiv21 {probs.user}</h3>
            <p>
                {user}
            </p>

        </div>

    );
}

export default Mydiv21;