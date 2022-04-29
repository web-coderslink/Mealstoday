import { useContext } from "react";
import MealitemForm from "./fooditemform";
import CartContext from "../../../store/card-contex";
import classes from './fooditem.module.css'
export default function Mealitem(props) {

  const cartctx = useContext(CartContext);

  const addtocartHandler = (amount) => {
    cartctx.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      image:props.image,
      price: props.price,
    });
  };

  return (
    <li>
      <div className={classes.box2}>

        <div>
          <img src={props.image} alt={props.name}></img>
          </div>

        <div className={classes.box1}>
        <h3 className={classes.title}>{props.name}</h3>
        <div className={classes.des}>{props.description}</div>
        <div className={classes.price}>Price : {props.price}$</div>
        </div>
        
      </div>

      <div className={classes.box}>
        <MealitemForm onAddToCart={addtocartHandler} amount={cartctx.items} />
      </div>
    </li>
  );
}
