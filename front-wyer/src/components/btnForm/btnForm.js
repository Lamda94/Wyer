function Button({btn, func}) {
    return ( 
        <a className={btn.class} onClick={func}>
            {btn.name}
        </a>
     );
}

export default Button;