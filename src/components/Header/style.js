import { makeStyles } from '@material-ui/core';

export default makeStyles({
  headerContainer: {
    position: 'relative',
    paddingTop: '4rem',
    margin: '0 1.5rem',
  },
  searchBar:{
    width: '100px',
    outline: 'none',
    padding: '4px 8px',
  },
  searchButton: {
    width: '80px',
    height: '30px',
    border:'#161616',
    backgroundColor: '#161616',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  title: {
    fontSize: 47,
    textAlign: 'center',
    fontWeight: 500,
    margin: '0 0 1rem',
  },
  control: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },
  form: {
    width: 192,
    display: 'flex',
    border: 'solid 1px #153e69',
    paddingLeft: '1rem',
    borderRadius: 4,
  }
});
