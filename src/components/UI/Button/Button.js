import React from 'react';
import PropTypes from 'prop-types';
import Styles from "./Button.module.css";

const button = props => {
    return(
   <button className={[Styles.Button , Styles[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
    );
};

button.propTypes = {
    
};

export default button;