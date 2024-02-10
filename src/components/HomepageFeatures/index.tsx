import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dev',
    Svg: require('@site/static/img/undraw_code.svg').default,
    description: (
      <>
        <div>
            <b>
                The road of the developer.
            </b>
        </div>
        Transforming the experiences of the aspiring and most senior (coming soon) into text.
      </>
    ),
  },
  {
    title: 'Assorted',
    Svg: require('@site/static/img/undraw_person.svg').default,
    description: (
      <>
        <div>
            <b>
                Everything else under the sun.
            </b>
        </div>
        An attempt to talk less and write more. 
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_chat-text.svg').default,
    description: (
      <>
        <div>
            <b>
                The why and how. 
            </b>
        </div>
        Commentary and time-sensitive posts. 
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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