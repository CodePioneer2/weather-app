const Weather = (() => {
  const API_KEY = 'F4KGLLYBJRFAT4GYW6B5DVKSM';
  const location = 'Turku';
  const API_ADDRESS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  const getData = async () => {
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

  const processData = async () => {
    const data = await getData();
    const days = data.days;
    const day1temp = days[0].temp;
    return day1temp;
  };

  return { getData, processData };
})();

export default Weather;
