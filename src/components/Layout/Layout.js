import React from 'react';
import Aux from "../../HOC/Auxi";
import styles from "../Layout/Layout.module.css";

const Layout = (props) => {
    return (
       
            <Aux>
                <div>Toolbar , sidebar , Backdrop</div>
               <main className={styles.content}>
                    {props.children}
                </main>
            </Aux>
            
        
    );
};

export default Layout;