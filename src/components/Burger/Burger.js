import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import Styles from "../Burger/Burger.module.css";

const Burger = (props) => {

    console.log(Object.keys(props.ingredients)+" Object.keys(props.ingredients)");
    let tranformedIngredients = Object.keys(props.ingredients).map(igKey => {

        return(
            [...Array(props.ingredients[igKey])].map( (_ ,index)=>{
               return <BurgerIngredient key={igKey+index} type={igKey}/>
            })
        )
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if (tranformedIngredients.length === 0){
        tranformedIngredients = <p>Please start adding ingredients !</p>
    }
console.log(tranformedIngredients);
    return (
        <div className={Styles.Burger}>
            <BurgerIngredient type="bread-top"/>
           {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
    );
};

export default Burger;