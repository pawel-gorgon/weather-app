import React from 'react';
import moment from 'moment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useSelector } from 'react-redux';

import { selectIsCelsius } from '../../redux/locationSlice';
import { getTemperature } from '../../helpers';
import useStyles from './style';
import { constants } from '../../constants';

const { imageUrl } = constants;

const DayForecastPanel = () => {
  const weather = useSelector((state) => state.weather);
  const isCelsius = useSelector(selectIsCelsius);
  const today = weather?.weathers[0];
  const classes = useStyles();

  const getDateAndTime = (time) => moment(new Date(time)).format('ddd, DD MMM h:mm a');

  return (
    <>
      {weather.title && today && (
        <div className={classes.container}>
          <div>
            <div className={classes.location}>
              <LocationOnIcon fontSize={'large'} />
              <span>{weather?.title}</span>
            </div>
            <div className={classes.time}>
              <span>{getDateAndTime(weather?.time)}</span>
            </div>
          </div>

          <div className={classes.body}>
            <div className={classes.general}>
              <div className={classes.current}>
                <img width={40} height={40} src={`${imageUrl}${today?.weather_state_abbr}.png`} alt='' />
                <span>{getTemperature(today?.the_temp, isCelsius)}</span>
              </div>
              <div className={classes.widespread}>
                <p><span>Weather Condition: </span>{today?.weather_state_name}</p>
                <p>
                  <span>Max: </span>
                  {`${getTemperature(today?.max_temp, isCelsius)}, `}
                  <span>Min: </span>
                  {`${getTemperature(today?.min_temp, isCelsius)}`}
                </p>
                <p><span>Wind: </span>{Math.ceil(today?.wind_speed)}mph, {`${today?.wind_direction.toFixed(0)}° ${today?.wind_direction_compass}`}</p>
                <p><span>Humidity: </span>{`${today?.humidity}%`}</p>
                <p><span>Visibility: </span>{`${today?.visibility.toFixed(0)}miles`}</p>
                <p><span>Pressure: </span>{`${today?.air_pressure.toFixed(0)}mbar`}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DayForecastPanel;
