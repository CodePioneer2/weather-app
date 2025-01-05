const Weather = (() => {
  const API_KEY = 'F4KGLLYBJRFAT4GYW6B5DVKSM';

  const fetchData = async (location) => {
    const API_ADDRESS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    try {
      const response = await fetch(API_ADDRESS);
      if (!response.ok) {
        throw new Error(`Something happened: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch {
      console.error(error.message);
    }
  };

  const getLocationData = async (location) => {
    const data = await fetchData(location);
    if (!data) {
      throw new Error('Failed to fetch weather data');
    }
    return data.days;
  };

  return { getLocationData };
})();

export default Weather;
