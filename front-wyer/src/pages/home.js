
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactList from '../components/contactList/contactList';
import NewContact from "../components/newContact/newContact";
import UpdateContact from "../components/contactUpdate/updateContact";

function Home() {
    return (
        <div className="container-fluid bg-dark">
           <Router>
                <Routes>
                    <Route path="/" element={<ContactList/>}/>
                    <Route path="/contact/new" element={<NewContact/>}/>
                    <Route path="/contact/update" element={<UpdateContact/>}/>
                </Routes>
           </Router>
        </div>
    );
}

export default Home;