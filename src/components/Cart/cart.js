import Modal from "../UI/Modal";
import CartContext from "../../store/card-contex";
import CartItem from "./cartitem";
import { useContext } from "react";
export default function Cart(props) {
  const cartctx = useContext(CartContext);

  const totalAmt =cartctx.totalAmount.toFixed(2);
  const hascartitem = cartctx.items.length > 0;

  function removeHandler(id){
      console.log(id);
     cartctx.removeItems(id);
  }

  function AddHandler(item){
   cartctx.addItems({...item,amount:1});
  }


  const cartitems = (
    <ul>
      {cartctx.items.map((x) => {
       return <CartItem key={x.id}
       amount={x.amount} name={x.name} price={x.price}
       onRemove={removeHandler.bind(null,x.id)} onAdd={AddHandler.bind(null,x)}/>;
      })}
    </ul>
  );

console.log(cartitems);
  return (
    <Modal onClick={props.onCloseCart}>
      {cartitems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmt}$</span>
      </div>

      <div>
        <button onClick={props.onCloseCart}>close</button>
        {hascartitem && <button> order</button>}
      </div>
    </Modal>
  );
}
