import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from "../../HOC/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
    salad : 5,
    cheese:10,
    meat:15,
    bacon:10

}



class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state={
            ingredients:{
                salad:0,
                meat:0,
                bacon:0,
                cheese:0
            },
            totalPrice : 4,
            purchasable:false,
            purchasing:false
           

        }

    }

   updatePurchaseState =(updatedIngredients) =>{
       
       const sum = Object.keys(updatedIngredients).map(igKey => {
           return updatedIngredients[igKey]
       })
       .reduce((sum,el) => {
           return sum+el
       },4);
       this.setState({
           purchasable:sum > 4
       })

       
   }


    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];       
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients 
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice :newPrice,
            ingredients : updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount>0 ? oldCount-1 : oldCount;
        
        const updatedIngredients = {
            ...this.state.ingredients 
        }

        updatedIngredients[type] = updatedCount;
        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice>4 ? oldPrice - priceSubstraction : oldPrice;
        this.setState({
            totalPrice :newPrice,
            ingredients : updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
        
    }

    purchaseHandler =()=>{
        this.setState({
            purchasing:true
        })
    }

    modalClosed = () =>{
        this.setState({
            purchasing:false
        })
    }

    render() {
        const {ingredients} = this.state;
        return (
            <Aux>
                <Burger ingredients={ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientsRemoved = {this.removeIngredientHandler}
                price={this.state.totalPrice}
                purchasable = {this.state.purchasable} 
                purchaseHandler = {this.purchaseHandler}               
                />

            <Modal show={this.state.purchasing} modalClosed ={this.modalClosed}>
            <OrderSummary ingredients={this.state.ingredients}/>
            </Modal>

            </Aux>
        );
    }
}

BurgerBuilder.propTypes = {

};

export default BurgerBuilder;