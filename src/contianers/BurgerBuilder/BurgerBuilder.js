import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state={
            ingredients:{
                salad:0,
                meat:0,
                bacon:0,
                cheese:0
            }

        }

    }

    

    render() {
        const {ingredients} = this.state;
        return (
            <Aux>
                <Burger ingredients={ingredients}/>
                <BuildControls/>

            </Aux>
        );
    }
}

BurgerBuilder.propTypes = {

};

export default BurgerBuilder;