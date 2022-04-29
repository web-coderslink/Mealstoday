import CartContext from "../../store/card-contex";
import { useContext } from "react";
import classes from "./cartbtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartButton = (props) => {
  const Cartctx = useContext(CartContext);

  const numberofcartitems = Cartctx.items.reduce((curnumber, item) => {
    return curnumber + item.amount;
  }, 0);
  console.log(numberofcartitems);

  return (
      
         
          <button
      className={classes.cartbtn}
      onClick={props.onClick}
      
    >
        <FontAwesomeIcon icon={faCartShopping}  size='3x'  color='green' ></FontAwesomeIcon>
       <span>{numberofcartitems}</span> 

    </button>
    
    
  );
};

export default CartButton;
