

const CartItem =(props) => {
    console.log(props);
    return(
        <li>
            <div>
                <h2>{props.name}</h2>
          
            <div>
                <span>{props.price}$</span>
                <span>{props.amount}</span>
            </div>
            </div>
            <div>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem;