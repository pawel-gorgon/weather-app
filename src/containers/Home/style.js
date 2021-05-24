import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    margin: '0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  loader: {
    position: 'absolute',
    top: 130,
    left: 'calc(50% - 20px)',
  },
});
