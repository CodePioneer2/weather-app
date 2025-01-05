const Weather = (() => {
  const API_KEY = 'F4KGLLYBJRFAT4GYW6B5DVKSM';
  const location = 'Turku';
  const API_ADDRESS = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  const getData = async () => {
    const fetchData = await fetch(API_ADDRESS);
    const fetchObject = await fetchData.json();
    const result = fetchObject;
    return result;
  };

  
  return { getData };
})();

export default Weather;
