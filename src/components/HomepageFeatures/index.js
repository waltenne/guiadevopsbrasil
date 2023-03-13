import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Iniciante",
    link: "docs/niveis/iniciante/",
    description: "Historica da Computação, Sistemas Operacionais Sistemas da Informação e muito mais",
  },
  {
    title: "Intermediário",
    link: "docs/niveis/intermediario/",
    description: "Linux, Lógica Programação e Banco de Dados",
  },
  {
    title: "Avançado",
    link: "docs/niveis/avancado/",
    description: "Linux, Infra as Code (IaC), Container e muito mais",
  },
  {
    title: "Twitter Spaces",
    link: "docs/twitter_spaces/",
    description: "Bate-papos da comunidade sobre assuntos diversos",
  },
  {
    title: "Dicas",
    link: "docs/dicas/",
    description: "Docker rootless",
  },
  {
    title: "Dúvidas frequentes",
    link: "docs/duvidas/",
    description: "Em construção 🚀",
  },
];

function Feature({ title, description, link, index }) {
  return (
    <li>
      <Link className={styles.cards} to={link} data-count={index}>
        <h2 className={styles.cardlink}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {/* <div className='container'>
            <Svg className={styles.featureSvg} role="img" src={'/docs/intro'} />
          </div> */}
      </Link>
    </li>
  );
}

export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <h1>Explore a documentação</h1>
      <ul className={styles.container}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} index={idx + 1} {...props} />
        ))}
      </ul>
    </section>
  );
}
