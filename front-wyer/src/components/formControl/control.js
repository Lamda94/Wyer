function Control(props) {
    const {data, dataFunc} = props; 
    return (
        <div className="mb-3">
            <input type={data.type} className="form-control rounded-pill" name={data.name} placeholder={data.text} value={data.value} onChange={dataFunc}/>
        </div>
    );
}

export default Control;