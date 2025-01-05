import Weather from './weather'; // Import model
import Render from './render'; // Import view

const Controller = (() => {
  const location = document.getElementById('location');
  const submitBtn = document.getElementById('submit-btn');
  const data = submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Weather.processData(location.value);
  });

  return { data };
})();

export default Controller;
