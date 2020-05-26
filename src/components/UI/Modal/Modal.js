import React from 'react';
import Styles from "../Modal/Modal.module.css";
import Backdrop from "../Modal/Backdrop/Backdrop";
import Aux from "../../../HOC/Auxi";

const Modal = (props) => {
    return (
       <Aux>
           <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={Styles.Modal}
        style={{
            transform:props.show ?'translateY(0)':'translateY(-100vh)',
            }}
        >
            {props.children}
            
        </div>
        </Aux>
    );
};

export default Modal;