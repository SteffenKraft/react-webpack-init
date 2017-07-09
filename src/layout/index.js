import React from 'react';
import PropTypes from 'prop-types';

const Layout = props => (
  <div>
    <div>Header</div>
    {props.children}
    <div>Footer</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
