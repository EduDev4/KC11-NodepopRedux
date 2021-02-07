import React from 'react';

import Layout from '../../layout';

import Adverts from './Adverts';
import FiltersForm from './FiltersForm';

import './FilterBar.css';

const AdvertsPage = () => (
  <Layout title="¿Qué estás buscando hoy?">
    <div className="filer-container">
      <div className="filer-container-wrapper">
        <FiltersForm />
      </div>
    </div>
    <Adverts />
  </Layout>
);

export default AdvertsPage;
