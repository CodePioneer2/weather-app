import Weather from './weather'; // Import model
import Render from './render'; // Import view

const Controller = () => {
  const submitBtn = document.getElementById('submit-btn');
  const locationInput = document.getElementById('location');

  submitBtn.addEventListener('click', async (e) => {
    const location = locationInput.value;
    e.preventDefault();
    try {
      const tempToday = await Weather.getLocationData(location);
      Render(location, tempToday);
    } catch (error) {
      console.error('Something weird happened', error);
    }
  });
};

export default Controller;
