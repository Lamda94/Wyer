import React, { useEffect, useState } from 'react';

import './item.css';

function Item({item, active}) {
    const [id, setId] = useState([])

    useEffect(() => {
        setId(active.active == item.id ? "active" : "inactive");
    }, []);
    return ( 
        <p className="text-center me-2" id={id}><a className="navbar-brand text-white fs-6"  href="#">{item.name}</a><br/><i className={item.icono}></i></p>
     );
}

export default Item;