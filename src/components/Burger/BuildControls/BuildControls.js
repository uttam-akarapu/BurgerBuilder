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
            {controls.map(control=>(
               <BuildControl key={control.label} label={control.label} />
               )
            )
            }
            
        </div>
    );
};

export default BuildControls;