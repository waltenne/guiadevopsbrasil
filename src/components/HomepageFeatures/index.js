import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Iniciante',
    link: 'docs/niveis/iniciante/',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Intermediário',
    link: 'docs/niveis/intermediario/',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Avançado',
    link: 'docs/niveis/avancado/',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Twitter Spaces',
    link: 'docs/twitter_spaces/',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Dicas',
    link: 'docs/dicas/',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Dúvidas frequentes',
    link: 'docs/duvidas/',
    description: (
      <>

      </>
    ),
  },
];

function Feature({ title, description, link, Svg }) {
  return (
    <div className={clsx('col col--4')}>
      <div>
        <Link className={styles.cards} to={link}>
          <p className={styles.cardlink}>{title}</p>
          <p className={styles.description}>{description}</p>
          {/* <div className='container'>
            <Svg className={styles.featureSvg} role="img" src={'/docs/intro'} />
          </div> */}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <div className={styles.space}>
        <h2>Explore a documentação</h2>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
