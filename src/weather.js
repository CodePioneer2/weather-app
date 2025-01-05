const Weather = (() => {
  const API_KEY = 'F4KGLLYBJRFAT4GYW6B5DVKSM';

  const fetchData = async (location) => {
    const API_ADDRESS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    console.log(location);
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
    console.log(data);
    if (!data) {
      throw new Error('Failed to fetch weather data');
    }

    const daysTemps = data.days.map((day) => {
      return day.temp;
    });
    const daysIcons = data.days.map((day) => {
      return day.icon;
    });

    return daysTemps, daysIcons;
  };

  return { getLocationData };
})();

export default Weather;
