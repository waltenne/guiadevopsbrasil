import React from 'react';
import Footer from '@theme-original/Footer';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function FooterWrapper(props) {
  return (
    <>
      <div className={styles.footerDiv}>
        <div className={styles.footerSocialMedia}>
          <div className={styles.footerContainer}>
            <div className={styles.footerRight}>
              <iframe src="https://ghbtns.com/github-btn.html?user=waltenne&repo=guiadevopsbrasil&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p>Guia DevOps Brasil idealizado por <a href='https://github.com/waltenne' target="_blank" rel="noopener noreferrer"><b>Waltenne Carvalho</b></a> e mantido pela comunidade.</p>
        </div>
      </div>
      {/* <Footer {...props} /> */}
    </>
  );
}
