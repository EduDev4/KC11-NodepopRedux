import React from 'react';
import Layout from '../../layout';

import AdvertData from './AdvertData';

const AdvertPage = ({ match }) => {
  return (
    <Layout title="Advert Detail">
      <div className="AdvertPage">
        <AdvertData advertId={match.params.id} />
      </div>
    </Layout>
  );
};

export default AdvertPage;
