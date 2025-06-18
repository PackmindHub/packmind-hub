import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link?: string;
  comingSoon?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Typescript',
    description: (
      <>
        Best practices and coding guidelines for TypeScript development.
      </>
    ),
    link: '/docs/typescript',
  },
  {
    title: 'Java',
    description: (
      <>
        Comprehensive Java coding practices and patterns for enterprise development.
      </>
    ),
    link: '/docs/java',
  },
  {
    title: 'Accessibility',
    description: (
      <>
        Best practices for creating accessible web applications in React TSX.
      </>
    ),
    link: '/docs/accessibility',
  },
  {
    title: "Craft practices by Arolla",
    description: (
      <>
        Domain-Driven Design and Clean Code practices by Arolla.
      </>
    ),
    link: '/docs/arolla',
  },
];

function Feature({title, description, link, comingSoon}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && !comingSoon && (
          <div className="text--center">
            <Link
              className="button button--primary button--lg"
              to={link}>
              Get Started
            </Link>
          </div>
        )}
        {comingSoon && (
          <div className="text--center">
            <span className="badge badge--secondary">Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
