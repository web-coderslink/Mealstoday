import ReactDom from 'react-dom' 
import classes from './Modal.module.css'

const Backdrop = props =>{
   return <div className={classes.backdrop} onClick={props.onClick} ></div>
}

const Overlay = props =>{
   return <div className={classes.overlayCard}><div>{props.children}</div></div>
}

const portalelement = document.getElementById('overlays');
const Modal = (props) => {
   return (
       <>
       {ReactDom.createPortal(  <Backdrop onClick={props.onClick} />,portalelement)}
       {ReactDom.createPortal(   <Overlay>{props.children}</Overlay>,portalelement)}
     
    
       </>
   )
};

export default Modal;
