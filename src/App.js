import './App.css';
import Header from './components/layout/Header';
import {useReducer} from 'react'
import Meals from './components/Food/food';
import Cart from './components/Cart/cart';
import CartProvider from './store/cartProvider';

const collection ={
   cartshow:false
}

const reducer =(state,action)=>{
 console.log(state);
  switch (action.type){
  
    case 'show': return {...state,cartshow:true};
    case 'hide':return {...state,cartshow:false};
    default:
      return state;
  }

}

function App() {
 
  const [state,dispatch]=useReducer(reducer,collection);
  const showcartitemHandler=()=>{
    dispatch({type:'show'})
  }

  const hidecartitemHandler=()=>{
    dispatch({type:'hide'})
  }
  

  return (
   <CartProvider>
     {state.cartshow && <Cart onCloseCart={hidecartitemHandler} />}
     <Header onShowCart={showcartitemHandler}/>
     <main>
       <Meals />
     </main>
   </CartProvider>
  );
}

export default App;
