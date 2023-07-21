import React from "react";
import styles from "./styles.module.css";

export default function FooterWrapper(props) {
  return (
    <footer className={styles.footerDiv}>
      <p className={styles.footerCopyright}>
        <iframe src="https://ghbtns.com/github-btn.html?user=waltenne&repo=guiadevopsbrasil&type=star&count=true&size=small" frameborder="0" width="200" height="20" title="GitHub"></iframe>
        Guia DevOps Brasil idealizado por{" "}
        <a
          href="https://github.com/waltenne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Waltenne Carvalho</b>
        </a>{" "}
        e mantido pela comunidade.
      </p>
    </footer>
  );
}
