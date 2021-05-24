import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import CircularProgress from '@material-ui/core/CircularProgress';

import DayForecastPanel from '../../components/DayForecastPanel';
import WeekForecastPanel from '../../components/WeekForecastPanel';
import { useCurrentLocation } from '../../hooks/location';
import { selectWeather, selectIsLoading } from '../../redux/locationSlice';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  const weather = useSelector(selectWeather);
  const loading = useSelector(selectIsLoading);
  const { error } = useCurrentLocation();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const err = weather?.error || error
    if (err) {
      enqueueSnackbar(err, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, weather]);

  return (
    <>
      <div className={classes.container}>
        <DayForecastPanel />
        <WeekForecastPanel />
      </div>
      {loading && (
        <div className={classes.loader}>
          <CircularProgress color="secondary" />
        </div>
      )}
    </>
  );
};

export default Home;
