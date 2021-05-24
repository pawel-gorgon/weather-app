import React from 'react';

import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>
      <h1>Sorry, page not found!</h1>
    </div>
  );
};

export default NotFound;
