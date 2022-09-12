import Item from '../dropItem/item';
function DropDown(data) {
    return (
        <div className="mb-3">
            <select className="form-select rounded-pill" aria-label="Default select example" placeholder={data.data.placeholder}>
                <Item data={data.data.items} />
            </select>
        </div>
    );
}

export default DropDown;