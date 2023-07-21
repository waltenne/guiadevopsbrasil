import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TypeWriter from "typewriter-effect";
export default function Homepage() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerBody}>
                <div className={styles.headerTitleContainer}>
                    <div className={styles.headerSign}>
                        <div className={styles.headerTypeWriter}>
                            <TypeWriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Conceitos")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Linux")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Windows")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Cloud")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Automação")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Container")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("IaC")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Git")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Monitoramento")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }}
                                options={{
                                    loop: true,
                                }}
                            />
                        </div>
                        <div className={styles.headerSignTitle}>
                            <h2>em um só lugar!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}