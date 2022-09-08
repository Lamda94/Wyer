import './contact.css'
function Contact() {
    return ( 
        <div className="row border-bottom mb-2">
            <div className="col-7 d-block">
                <div className="row bold">
                    John Doe
                </div>
                <div className="row color">
                    (+57) 123 456 7890
                </div>
            </div>
            <div className="col-5 d-block float-end">
                <i class="bi bi-pencil ms-2 color icono"></i>
                <i class="bi bi-check2-circle ms-2 color icono"></i>
                <i class="bi bi-trash-fill ms-2 color icono"></i>
            </div>
        </div>
     );
}

export default Contact;