function Search(props) {
    const {search} = props;
    return ( 
    <div className="input-group bg-light ">        
        <input type="text" className="form-control bg-ligth" placeholder="Buscar" aria-label="Input group example" aria-describedby="btnGroupAddon" onKeyPress={search}/>
        <div className="input-group-text bg-light" ><i className="bi bi-search"></i></div>
    </div> 
    );
}

export default Search;