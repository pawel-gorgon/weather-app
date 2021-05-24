import React from 'react';
import { useSelector } from 'react-redux';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import moment from 'moment';

import { selectIsCelsius } from '../../redux/locationSlice';
import { getTemperature } from '../../helpers';
import useStyles from './style';

import { constants } from '../../constants';

const { imageUrl } = constants;

const WeekForecastPanel = () => {
  const classes = useStyles();
  const weather = useSelector((state) => state.weather);
  const isCelsius = useSelector(selectIsCelsius);
  const nextWeekforcasts = weather?.weathers.slice(1);

  const getDateAndTime = (time) => moment(new Date(time)).format('ddd, DD MMM');

  return (
    <>
      {weather.title && nextWeekforcasts && (
        <div className={classes.container}>
          <div className={classes.body}>
            {nextWeekforcasts?.map((item, index) => (
              <div key={index} className={classes.dayItem}>
                <span className="day">{index === 0 ? 'Tommorow' : getDateAndTime(item.applicable_date)}</span>
                <div className="humidity">
                  {item.humidity && (
                    <>
                      <BubbleChartIcon />
                      <span>{`${item.humidity}%`}</span>
                    </>
                  )}
                </div>
                <div className="wind">
                  <p>{Math.ceil(item?.wind_speed)}mph, {`${item?.wind_direction.toFixed(0)}° ${item?.wind_direction_compass}`}</p>
                </div>
                <div className="weather">
                  <img src={`${imageUrl}${item.weather_state_abbr}.png`} alt='' width={30} height={30} />
                </div>
                <span className="temperature">{`${getTemperature(item.max_temp, isCelsius)} / ${getTemperature(item.min_temp, isCelsius)}`}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WeekForecastPanel;
