import Weather from './weather'; // Import model
import Render from './render'; // Import view

const Controller = () => {
  const submitBtn = document.getElementById('submit-btn');
  const locationInput = document.getElementById('location');

  submitBtn.addEventListener('click', async (e) => {
    const location = locationInput.value;
    e.preventDefault();

    try {
      const locationDays = await Weather.getLocationData(location);

      const days = locationDays.map((day) => day.datetime);
      const temps = locationDays.map((day) => day.temp);
      const locationIcons = locationDays.map((day) => day.icon);

      Render(location, days, temps, locationIcons);
    } catch (error) {
      console.error('Something weird happened', error);
    }
  });
};

export default Controller;
