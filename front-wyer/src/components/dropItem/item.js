function Item(props) {
    const {data} = props
    return (
        data.map(item=>{
            return(
                <option value={item}>{item}</option>
            )
        })         
    );
}

export default Item;