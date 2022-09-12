function Item(data) {
    return (
        data.data.map(item=>{
            return(
                <option value={item}>{item}</option>
            )
        })         
    );
}

export default Item;