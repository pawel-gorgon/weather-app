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

    '@media(max-width: 992px)': {
      flex: 'auto',
      width: '100%',
    },
  },

  location: {
    display: 'flex',
    alignItems: 'center',

    '& span': {
      fontSize: 30,
    },
  },

  time: {
    color: '#c5c5c5',
    fontSize: 16,
  },

  body: {
    flex: 1,
  },

  general: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0 0',
  },

  current: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 30,

    '& > img': {
      marginRight: 8,
    },
  },

  widespread: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 10,

    '& > p': {
      margin: '0 0 8px',
      color: 'white',
      fontSize: 16,
      whiteSpace: 'nowrap',

      '& > span': {
        color: '#c5c5c5',
      }
    },
  },

  hourly: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  hourItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 5px',

    '& p': {
      margin: 0,
    },

    '& .hour': {
      color: '#c5c5c5',
      fontSize: 15,
      paddingBottom: 5,
    },

    '& .temperature': {
      paddingTop: 5,
    },

    '& .humidity': {
      display: 'flex',
      justifyContent: 'center',
      color: '#c5c5c5',
      fontSize: 13,

      '& svg': {
        fontSize: 19,
        color: '#347789',
      },
    },
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
