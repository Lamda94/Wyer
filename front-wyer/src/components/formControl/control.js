function Control({data, dataFunc}) { 
    return (
        <div className="mb-3">
            <input type={data.type} className="form-control rounded-pill" name={data.name} placeholder={data.text} onChange={dataFunc}/>
        </div>
    );
}

export default Control;