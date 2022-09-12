
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactList from '../components/contactList/contactList';
import NewContact from "../components/newContact/newContact";
import UpdateContact from "../components/contactUpdate/updateContact";

function Home() {
    const [id, setId] = useState(0);
    useEffect(()=>{
        console.log("contact id:"+id);
    },[id])

    return (
        <div className="container-fluid bg-dark">
           <Router>
                <Routes>
                    <Route path="/" element={<ContactList func={setId}/>}/>
                    <Route path="/contact/new" element={<NewContact/>}/>
                    <Route path="/contact/update" element={<UpdateContact id={id}/>}/>
                </Routes>
           </Router>
        </div>
    );
}

export default Home;