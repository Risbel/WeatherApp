const getTimeZone = (lat, lon) => {
  fetch(`${BASE_URL_TIMEZONE}?key=${APP_KEY_TIMEZONE}&format=json&by=position&lat=${lat}&lng=${lon}`)
    .then((response) => response.json())
    .then((data) => (document.getElementById("hour").textContent = data.formatted))
    .catch((error) => console.error(error));
};
