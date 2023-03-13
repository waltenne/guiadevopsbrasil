import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TypeWriter from "typewriter-effect";

export default function Homepage() {
    return (
        <div className={styles.headerContainer}>            
            <div className={styles.headerBody}>
                <div className={styles.headerTitleContainer}>
                    <div><h2>Aprenda com a comunidade.</h2></div>
                </div>
            </div>
        </div>
    );
}