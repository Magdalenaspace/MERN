import React from 'react';
import styles from './Main.module.css';

const Main = (props) => {

    return (
        <div id={styles.main_content}>
                {props.children}
        </div>
    );
}

export default Main;
