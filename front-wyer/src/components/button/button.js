function Button(props) {
    const {btn} = props;
    return ( 
        <a className="btn btn-primary rounded-pill" href={btn[0].url}>
            {btn[0].name}
            <i className="bi bi-person-plus ms-2"></i>
        </a>
     );
}

export default Button;