import Contact from '../contact/contact';
import './contactList.css';
function ContactList() {
    return ( 
        <div className="row">
            <div className="col p-4 targeta">
                <Contact/>
                <Contact/>
                <Contact/>
            </div>
        </div>
     );
}

export default ContactList;