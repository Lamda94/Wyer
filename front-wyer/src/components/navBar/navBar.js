import React, { useState } from 'react';
import './navBar.css';
import Item from '../navItem/item';

function NavBar(active) {
    const [items, setItems] = useState([{id:1,name:"Contactos",icono:"bi bi-person"}, {id:2,name:"Tareas",icono:"bi bi-file-earmark-check"}, {id:3, name:"Comentarios",icono:"bi bi-chat-right-text"}]);
    
    return (
        <nav className="navbar sticky-bottom menu rounded-top pt-0">
            <div className="container-fluid justify-content-center">
                {items.map((item) => {
                    return(
                        <Item key={item.id} item={item} active={active}/>
                    );
                })}
            </div>
        </nav>
    );
}

export default NavBar;