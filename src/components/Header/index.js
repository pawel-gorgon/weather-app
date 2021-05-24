import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { useSelector } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
import { fetchLocation, setTempMode, selectIsCelsius } from '../../redux/locationSlice';

const Header = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const isCelsius = useSelector(selectIsCelsius);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    !!query && dispatch(fetchLocation({ type: 'query', value: query }))
  };

  const handleSwitchTempMode = () => {
    dispatch(setTempMode(!isCelsius));
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.main}>
        <div className={classes.buttons}>
        </div>
        <h1 className={classes.title}>Weather</h1>
        <div className={classes.control}>
          <div>
            <span>Celsius: </span>
            <Switch
              checked={isCelsius}
              onChange={handleSwitchTempMode}
              name="checkTempMode"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </div>
          <div className={classes.form}>
            <InputBase
              className={classes.input}
              placeholder="Search location"
              inputProps={{ 'aria-label': 'search locations' }}
              onChange={handleChange}
            />
            <IconButton aria-label='search' onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
