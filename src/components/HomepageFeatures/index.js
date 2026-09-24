import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clinical Data Management',
    description: (
      <>
        Bridging theoretical biomedical science with robust cloud data practices, 
        ensuring secure data quality, validation workflows, and compliance standards.
      </>
    ),
  },
  {
    title: 'PaaS Architecture & Supabase',
    description: (
      <>
        Leveraging PostgreSQL relational database modeling, Row Level Security (RLS), 
        and scalable backend infrastructure for healthcare documentation.
      </>
    ),
  },
  {
    title: 'Developer-Facing SDKs & APIs',
    description: (
      <>
        Clear API references, JavaScript/Python SDK integration guides, and 
        interactive system architecture diagrams designed for technical teams.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}