import React from 'react';
import styles from './Title.module.css'

function Title({title, subtitle = ''}) {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </>
    );
}

export default Title;