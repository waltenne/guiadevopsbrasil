import React from 'react';
import Link from '@docusaurus/Link';
import BlogCards from '@site/src/components/BlogCards';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Iniciante",
    Svg: require('@site/static/img/home/iniciante.svg').default,
    link: "docs/niveis/iniciante/",
    description: "",
  },
  {
    title: "Intermediário",
    Svg: require('@site/static/img/home/intermediario.svg').default,
    link: "docs/niveis/intermediario/",
    description: "",
  },
  {
    title: "Avançado",
    Svg: require('@site/static/img/home/avancado.svg').default,
    link: "docs/niveis/avancado/",
    description: "",
  },
  {
    title: "Twitter Spaces",
    Svg: require('@site/static/img/home/twitter.svg').default,
    link: "docs/twitter_spaces/",
    description: "",
  },
  {
    title: "Dicas",
    Svg: require('@site/static/img/home/dicas.svg').default,
    link: "docs/dicas/",
    description: "",
  },
  {
    title: "Dúvidas frequentes",
    Svg: require('@site/static/img/home/faq.svg').default,
    link: "docs/duvidas/",
    description: "",
  },
];

function Feature({ title, description, link, Svg }) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.cardLink} to={link}>
        <div className={styles.cards}>
          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <Svg className={styles.featureSvg} role="img" />
              <p className={styles.cardTitle}>{title}</p>
            </div>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className={styles.space}>
        <div className="container">
          <div className={styles.cardHeaderTitle}>
            <h2>Explore a documentação</h2>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className="container">
          <BlogCards />
        </div>
      </div>
    </section>
    
  );
}
