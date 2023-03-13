import React from "react";
import styles from "./styles.module.css";
import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <div className={styles.headerContainer}>
      <h2>
        <span className="sr-only">Aprenda com a comunidade</span>
        <div aria-disabled="true">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Aprenda com a comunidade")
                .pauseFor(600)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </h2>
    </div>
  );
}
