
//import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Search from '../components/Search/search';
import ContactList from '../components/contactList/contactList';
import NavBar from '../components/navBar/navBar';
function Home() {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-m-8 bg-white justify-content-center">
                    <div className='row p-2'>
                        <Search />
                    </div>
            
                    <div className='row p-2'>
                        <div className='col'>
                            <p className='text-primary'>Lista de contactos</p>
                            <ContactList/>
                        </div>
                    </div>

                    <div class="row fixed-bottom ">
                        <NavBar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;