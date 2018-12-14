import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';


const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div>
      {children}
    </div>
    <div>Footer</div>
  </Fragment>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
