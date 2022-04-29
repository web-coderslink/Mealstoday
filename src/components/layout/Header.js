import {Fragment} from 'react';
import CartButton from './Cartcomponent';
import classes from './header.module.css'


const Header =props =>{
    return (
        <Fragment >
         <header className={classes.head} style={{display:'flex'}}>
             <h1>TodayMeals </h1>
            <CartButton onClick={props.onShowCart}/>
         </header>
           
        </Fragment>
    );
}

export default Header;