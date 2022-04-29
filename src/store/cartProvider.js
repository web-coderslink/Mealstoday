import CartContext from "./card-contex";
import { useReducer } from "react";

const defaultcartstate = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatetotalamount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (i) => i.id === action.item.id
    );
    const existingcartitem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingcartitem) {
      const updatedItem = {
        ...existingcartitem,
        amount: existingcartitem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatetotalamount };
  }


  //remove
  if(action.type=== 'REMOVE'){
      const existingCartItemIndex =state.items.findIndex(
        (i) => i.id === action.id
      );

      const existingitem = state.items[existingCartItemIndex];
      const updatetotalamount =state.totalAmount - existingitem.price;
      let updatedItems;
      if(existingitem.amount === 1){
          console.log(state.items);
updatedItems=state.items.filter(i=> i.id !== action.id);
      } else{
       const updatedItem = {...existingitem,amount:existingitem.amount -1};
       updatedItems =[...state.items];
       updatedItems[existingCartItemIndex]=updatedItem;
      }

      return { items: updatedItems, totalAmount: updatetotalamount };
    }
  return defaultcartstate;
};

const CartProvider = (props) => {
  const [cartstate, dispatchcart] = useReducer(cartReducer, defaultcartstate);

  const additemtoCartHandler = (item) => {
    dispatchcart({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchcart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItems: additemtoCartHandler,
    removeItems: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
