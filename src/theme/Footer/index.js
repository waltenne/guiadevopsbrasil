import React from "react";
import Footer from "@theme-original/Footer";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function FooterWrapper(props) {
  return (
    <footer className={styles.footerDiv}>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=waltenne&repo=guiadevopsbrasil&type=star&count=true&size=large"
        frameborder="0"
        width="75"
        height="30"
        title="GitHub"
      ></iframe>
      <p className={styles.footerCopyright}>
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
