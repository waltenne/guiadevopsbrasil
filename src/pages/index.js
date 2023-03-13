import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Homepage from '@site/src/components/Homepage';

function HomepageHeader() {
  return (
    <header className='homepage'>
      <div className="homepage-container">
        <Homepage />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Aprenda sobre DevOps, de comunidade para comunidade">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
