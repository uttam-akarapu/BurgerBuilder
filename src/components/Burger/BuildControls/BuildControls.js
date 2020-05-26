import React from 'react';
import Styles from "../BuildControls/BuildControls.module.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls=[
    {label:'Salad' , type:'salad'},
    {label:'Meat' , type:'meat'},
    {label:'Cheese' , type:'cheese'},
    {label:'Bacon' , type:'bacon'}


];

const BuildControls = (props) => {
    return (
        <div className={Styles.BuildControls}>
            <h3>Current Price : {props.price}/-</h3>
            {controls.map(control=>(
               <BuildControl 
               key={control.label} 
               label={control.label} 
               added = {()=>props.ingredientAdded(control.type)}
               removed = {() => props.ingredientsRemoved(control.type)}
                      
               />
               )
            )
            }
            <button 
            className={Styles.OrderButton}
            disabled = {!props.purchasable}
            onClick={props.purchaseHandler}
            >ORDER NOW !</button>
        </div>
    );
};

export default BuildControls;