import Item from '../dropItem/item';
function DropDown(props) {
    const {data} = props
    return (
        <div className="mb-3">
            <select className="form-select rounded-pill" aria-label="Default select example" placeholder={data.placeholder}>
                <Item data={data.items} />
            </select>
        </div>
    );
}

export default DropDown;