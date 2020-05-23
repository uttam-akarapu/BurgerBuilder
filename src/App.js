import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./contianers/BurgerBuilder/BurgerBuilder";
import Burger from "./components/Burger/Burger";

class App extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="container">
          <Layout>
            <p>Hello Testing</p>
            <p><button className="btn btn-primary" >Click</button></p>
            <BurgerBuilder/>
           
            </Layout>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;