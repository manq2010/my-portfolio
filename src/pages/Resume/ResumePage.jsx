import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../features/Navbar/Navbar';
import headerData from '../../data/headerData';
import Resume from '../../features/Resume/Resume';

const Main = () => (
  <div>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        - Portfolio
      </title>
    </Helmet>

    <Navbar />
    <Resume />
  </div>
);

export default Main;
