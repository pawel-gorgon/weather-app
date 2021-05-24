const getTemperature = (temp, isCelsius = true) => {
  return isCelsius ? `${Math.round(temp)}°C` : `${Math.round((temp * 9 / 5) + 32)}°F`;
};

export {
  getTemperature
};
