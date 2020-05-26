import React from 'react';
import Aux from ".././../../HOC/Auxi";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
const ingredientSummary =Object.keys(props.ingredients).map((igKey,index) =>{
    return (
        <li key={index}>
            <span style={{textTransform:'capitalize'}}>{igKey} </span>: {props.ingredients[igKey]}
        </li>
    )

}); 

    return (
       <Aux>
           <h2>Your Order</h2>
           <p>With following ingredients : </p>
           <ul>
           {ingredientSummary}
           </ul>
           <p>Continue to Checkout ?</p>
           <Button btnType="Danger" clicked ={props.cancelled}>CANCEL</Button>
           <Button btnType="Success" clicked = {props.continue}>CONTINUE</Button>

       </Aux>
    );
};

export default OrderSummary;

