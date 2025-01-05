const Render = (location, days, locationTemps, locationIcons) => {
  const daysContainer = document.querySelector('.days');
  const h1 = document.querySelector('h1');

  const weekdays = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  h1.textContent = location;

  // Clear existing content
  daysContainer.innerHTML = '';

  // Dynamically import all the SVG icons from the assets folder
  const iconContext = require.context('./asset', false, /\.svg$/);

  for (let i = 0; i < locationTemps.length; i++) {
    const card = document.createElement('div');
    card.className = 'day';

    const h2 = document.createElement('h2');
    const date = new Date(days[i]);
    const weekday = weekdays[date.getDay()];
    h2.textContent = weekday;
    card.appendChild(h2);

    const datePara = document.createElement('p');
    datePara.textContent = days[i].split('-').reverse().join('.');
    card.appendChild(datePara);

    const tempPara = document.createElement('p');
    tempPara.innerHTML = `${locationTemps[i]} &deg;C`;
    card.appendChild(tempPara);

    const img = document.createElement('img');

    // Use the locationIcons value to dynamically load the correct icon
    const iconPath = iconContext(`./${locationIcons[i]}.svg`);
    img.src = iconPath;
    img.classList.add('day-img');
    img.alt = locationIcons[i];
    card.appendChild(img);

    daysContainer.appendChild(card);
  }
};

export default Render;
