import * as React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo lang={'pl-PL'} title='404: Not found' />
    <h1>Podana strona nie istnieje.</h1>
  </Layout>
);

export default NotFoundPage;
