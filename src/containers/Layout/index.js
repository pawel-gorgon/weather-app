import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import useStyles from './style';

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
