import React, { useEffect, useState } from 'react';
import './navBar.css';
import Item from '../navItem/item';
//import React, { Component } from 'react';

function NavBar() {
    const [items, setItems] = useState([{id:1,name:"Contactos"}, {id:2,name:"Tareas"}, {id:3, name:"Comentarios"}]);
    
    return (
        <nav class="navbar sticky-bottom menu rounded-top">
            <div class="container-fluid justify-content-center">
                {items.map((item) => {
                    return(
                        <Item key={item.id} item={item}/>
                    );
                })}
            </div>
        </nav>
    );
}

export default NavBar;