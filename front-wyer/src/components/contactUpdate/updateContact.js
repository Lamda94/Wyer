import React, { useEffect, useState } from 'react';
import Control from "../formControl/control";
import ControlDrop from "../dropDown/dropdown";
import NavBar from "../navBar/navBar";
import Button from '../btnForm/btnForm';
import moment from 'moment';
import axios from 'axios';

function NewContact(props) {
    const [id, setId] = useState(localStorage.getItem("id"));

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
    ]);

    useEffect(()=>{
        const url = 'http://localhost:3001/api/contacts/'+id;
        axios.get(url).then((res) => {
            const datos = dataForm;
            const data = controls.map(element=>{
                if (element.name !== "date") {
                    element.value =  res.data[element.name];   
                }
                datos[element.name] = element.name == "date" ? moment(res.data[element.name]).format('DD/MM/YYYY') : res.data[element.name];
                return element;
            })
            setDataForm(datos);
            setControls(data);
        });
    },[])

    const inputChange = (event) => {
        const data = controls;
        const name = event.target.name, value = event.target.value;
        data.map(item=>{
            if (item.name == name) {
                item.value = value;
            }
        })
        setControls(data)
        setDataForm({
            ...dataForm,
            [name]: name=="name" ? value.toLowerCase() : name=="lastname" ? value.toLowerCase() : value,
        })
    }

    const submitData = (event) => {
        const url='http://localhost:3001/api/contacts/update/'+id;
        //console.log(url);
        //console.log("data:"+JSON.stringify(dataForm));
        axios.put(url, dataForm).then((res) => {
            localStorage.removeItem('id');
            window.location = '/'
        });
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