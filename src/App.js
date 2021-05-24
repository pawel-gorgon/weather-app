import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import Containers from './containers';
import { useDispatch } from 'react-redux';
import { fetchLocation } from './redux/locationSlice';
import { useCurrentLocation } from './hooks/location';

const App = () => {
  const { location, error } = useCurrentLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      const latlong = `${location.latitude},${location.longitude}`;
      dispatch(fetchLocation({ type: 'lattlong', value: latlong }));
    } else if (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, error])

  return (
    <SnackbarProvider maxSnack={3}>
      <Containers />
    </SnackbarProvider>
  )
};

export default App;
