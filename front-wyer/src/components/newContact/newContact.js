import React, { useState } from 'react';
import Control from "../formControl/control";
import ControlDrop from "../dropDown/dropdown";
import NavBar from "../navBar/navBar";
import Button from '../btnForm/btnForm';
import axios from 'axios';

function NewContact() {
    const [dataForm, setDataForm] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        date: "",
        adress: "",
        contactType: "Client",
        origin: "Landing page"
    })
    const [controls, setControls] = useState([
        {
            id: 1,
            type: "text",
            text: "Nombres",
            name: "name"
        },
        {
            id: 2,
            type: "text",
            text: "Apellido",
            name: "lastname"
        },
        {
            id: 3,
            type: "email",
            text: "Email",
            name: "email"
        },
        {
            id: 4,
            type: "text",
            text: "Cel/Tel",
            name: "phone"
        },
        {
            id: 5,
            type: "date",
            text: "Fecha de nacimiento",
            name: "date"
        },
        {
            id: 6,
            type: "text",
            text: "Dirección",
            name: "adress"
        }
    ]);

    const [dropdown, setDropdown] = useState([
        {
            id: 7,
            placeholder: "Tipo de Contacto",
            items: ["Cliente"]
        },
        {
            id: 8,
            value: "Origen",
            items: ["Landing page"]
        }
    ])

    const inputChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value,
        })
    }

    const submitData = (event) => {
        axios.post('http://localhost:3001/api/contacts', dataForm).then((res) => window.location = '/');
    }
    return (
        <div className="row mt-4">
            <div className="col-m-8 bg-white justify-content-center">
                <div className='row p-2 mb-5'>
                    <div className='col'>
                        <p className='text-primary'>Nuevo contacto</p>
                        <div className="row">
                            <div className="col p-4 targeta">
                                {
                                    controls.map(element => {
                                        return (
                                            <Control
                                                key={element.id}
                                                data={element}
                                                dataFunc={inputChange}
                                            />
                                        )
                                    })
                                }
                                {
                                    dropdown.map(element => {
                                        return (
                                            <ControlDrop key={element.id} data={element} />
                                        )
                                    })
                                }
                            </div>
                            <br />
                            <div className='col-12 p-4 d-flex justify-content-center mb-3'>
                                <Button btn={
                                    {
                                        class: "btn btn-secondary",
                                        url: "",
                                        name: "Cancelar"
                                    }
                                }
                                func={
                                    ()=>window.location = '/'
                                } />
                                <Button btn={
                                    {
                                        class: "btn btn-success ms-2",
                                        url: "",
                                        name: "Agregar"
                                    }
                                } func={submitData} />
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

export default NewContact;