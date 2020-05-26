import React from 'react';
import Aux from ".././../../HOC/Auxi";

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

       </Aux>
    );
};

export default OrderSummary;

