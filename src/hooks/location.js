import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
  // store error message in state
  const [error, setError] = useState();

  // store location in state
  const [location, setLocation] = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    // If the geolocation is not defined in the used browser you can handle it as an error
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    // Call the Geolocation API
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  // Expose location result and the possible error message
  return { location, error };
};
