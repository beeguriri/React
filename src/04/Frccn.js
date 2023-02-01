const Frccn = ({cn}) => {

    console.log('cn:', cn)
    
    let infoArry = [...cn];

    // eslint-disable-next-line default-case       
    switch (1) {    
        case 1 : infoArry = cn.split(','); break;
        case 2 : infoArry = cn.split(','); break;
        case 3 : infoArry = cn.split(','); break;
        case 4 : infoArry = cn.split(','); break;
    }

    infoArry = infoArry.map((v) => 
        
        v.includes('높음') ?
        <li>
            <span>{v.split(':')[0]}</span>
            <span className='lired'>{v.split(':')[1]}</span> 
        </li> :
        <li>{v}</li>
    );


    return (
        <div className="mainbox2">
            <div className='detail'>
                <ul>
                    {infoArry}
                </ul>
            </div>
        </div>
    );

}

export default Frccn;