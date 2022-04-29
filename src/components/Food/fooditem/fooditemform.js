import classes from './amount.module.css'
import {  useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export default function MealitemForm(props) {

  const Amountref = useRef();

  const [valid, setvalid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const inputAmt = Amountref.current.value;
    const inputAmtNum = +inputAmt;

    if (inputAmt.trim().length === 0 || inputAmtNum < 1 || inputAmtNum > 6) {
      setvalid(false);
      return;
    }

    props.onAddToCart(inputAmtNum);
  };



  return (
    <form onSubmit={submitHandler}  className={classes.Form}>
      <label>Amount</label>
      <input
        ref={Amountref}
        id={"amount" + props.id}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button><FontAwesomeIcon icon={faAdd} color='white' ></FontAwesomeIcon>  </button>
      {!valid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
