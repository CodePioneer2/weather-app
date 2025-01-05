const Render = (location, tempToday) => {
  const output = document.querySelector('.output-container');
  const locationName = document.getElementById('location-name');
  const temp = document.getElementById('temp');
  
  locationName.textContent = location;
  temp.textContent = tempToday;
  output.classList.remove('hidden');
};

export default Render;
