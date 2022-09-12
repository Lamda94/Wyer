import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Contact from '../contact/contact';
import Button from '../button/button';
import Search from "../Search/search";
import NavBar from "../navBar/navBar";
import './contactList.css';
function ContactList({ func }) {
    const [btn, setBtn] = useState([{ url: "/contact/new", name: "Agregar" }])
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/contacts').then((res) => {
            res.data.map(element => {
                element.name = capitalizeFirstLetter(element.name);
                element.lastname = capitalizeFirstLetter(element.lastname);
            })
            setContacts(res.data)
        });
    }, [])

    const deleteContact = (event) => {
        const id = event.target.id;
        const url = 'http://localhost:3001/api/contacts/delete/' + id;
        console.log(url);
        axios.delete(url).then((res) => {
            console.log(res.data);
            window.location = '/';
        });
    }

    const searchContact = (event) => {
        const body = {
            search: event.target.value
        };
        console.log("body: " + body);
        const url = 'http://localhost:3001/api/contacts/search/';
        axios.post(url, body).then((res) => {
            console.log(res.data);
            res.data.map(element => {
                element.name = capitalizeFirstLetter(element.name);
                element.lastname = capitalizeFirstLetter(element.lastname);
            })
            setContacts(res.data)
        });
    }

    const updateFunc = (event) => {
        const id = event.target.id;
        func(id);
        window.location = '/contact/update'
    }

    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="row">
            <div className="col-m-8 bg-white justify-content-center">
                <div className='row p-2'>
                    <Search search={searchContact} />
                </div>

                <div className='row p-2 mb-5'>
                    <div className='col'>
                        <p className='text-primary'>Lista de contactos</p>
                        <div className="row">
                            <div className="col p-4 targeta">
                                {
                                    contacts.map(item => {
                                        return (
                                            <Contact key={item._id} data={item} func={deleteContact} update={updateFunc} />
                                        )
                                    })
                                }
                            </div>
                            <br />
                            <div className='col-12 p-4 d-flex justify-content-center mb-3'>
                                <Button btn={btn} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row fixed-bottom mt-5 pt-2">
                    <NavBar active={1} />
                </div>
            </div>
        </div>
    );
}

export default ContactList;