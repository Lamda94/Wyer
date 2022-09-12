function Button(props) {
    const {btn, func} = props;
    return ( 
        <a className={btn.class} onClick={func}>
            {btn.name}
        </a>
     );
}

export default Button;