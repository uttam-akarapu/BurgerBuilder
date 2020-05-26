import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../Backdrop/Backdrop.module.css";

const Backdrop = (props) => {
    return (
    props.show ? <div className={Styles.backdrop1}  onClick={props.clicked}></div> : null
    );
    
};

Backdrop.propTypes = {
    
};

export default Backdrop;