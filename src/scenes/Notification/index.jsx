import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';


const Notification = ({ message }) => (
  <Layout>
    {message}
  </Layout>
);


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


export default Notification;
