function Item({item}) {
    console.log(item);
    return ( 
        <p className="text-center"><a class="navbar-brand text-white fs-6" href="#">{item.name}</a><br/><i class="bi bi-person"></i></p>
     );
}

export default Item;