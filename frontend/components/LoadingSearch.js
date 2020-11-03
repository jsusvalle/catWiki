import React from 'react';
import styles from '../public/static/css/loading.module.css';

const LoadingSearch = () => {
    return (  
        <div className={styles.sk_chase}>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
            <div className={styles.sk_chase_dot}></div>
        </div>
    );
}

export default LoadingSearch;