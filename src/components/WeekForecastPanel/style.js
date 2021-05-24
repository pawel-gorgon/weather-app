import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    backgroundColor: '#153e69',
    borderRadius: 15,
    padding: 24,
    marginBottom: 20,
    flex: 1,
    margin: '0 8px',
    display: 'flex',
    flexDirection: 'column',
  },

  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    '& .day': {
      width: '24%',
      color: '#c5c5c5',
      fontWeight: 'bold',
    },

    '& .humidity': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: 13,
      flex: 1,
      padding: '0 5px',

      '& svg': {
        fontSize: 19,
        color: '#347789',
      },
    },

    '& .wind': {
      display: 'flex',
      fontSize: 13,
      minWidth: 120,

      '@media(max-width: 992px)': {
        flex: 1,
        minWidth: 'unset',
      },
    },

    '& .weather': {
      display: 'flex',
      justifyContent: 'center',
      padding: '0 5px',
      width: 54,

      '& svg': {
        margin: '0 5px',
      },
    },

    '& .temperature': {
      width: 80,
      textAlign: 'right',
      fontSize: 13,
    },
  },

  dayItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '4px 0',
  },

  yesterday: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    color: '#c5c5c5',
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,

    '& button': {
      borderRadius: 30,
      backgroundColor: '#605c5c',
      color: 'white',
      padding: '7px 40px',
      border: 0,
    },
  },
});
