import React from 'react';
import Styles from "../BuildControl/BuildControl.module.css"

const BuildControl = (props) => {
    return (
        <div className={Styles.BuildControl}>
            <div className={Styles.Label}>{props.label}</div>
            <button className={Styles.Less}>Less</button>
            <button className={Styles.More}>More</button>
        </div>
    );
};

export default BuildControl;