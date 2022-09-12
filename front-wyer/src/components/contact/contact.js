import './contact.css'
function Contact({data, func}) {
    return ( 
        <div className="row border-bottom mb-2">
            <div className="col-6 d-block">
                <div className="row bold">
                    {data.name+" "+data.lastname}
                </div>
                <div className="row color">
                    {data.phone}
                </div>
            </div>
            <div className="col-6 d-block float-end">
                <i className="bi bi-pencil ms-3 color icono float-end"></i>
                <i className="bi bi-check2-circle ms-3 color icono float-end"></i>
                <i className="bi bi-trash-fill ms-2 color icono float-end" id={data._id} onClick={func}></i>
            </div>
        </div>
     );
}

export default Contact;