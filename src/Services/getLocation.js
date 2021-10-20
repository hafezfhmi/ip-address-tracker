import axios from 'axios';

const getData = (ip, domain) => {
  let key = 'at_8cXCi7NYKafCc5vV8mWsntzrLGcUh';

  // We return axios request to further chain it in INputDataContext.js
  return axios
    .get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip}&domain=${domain}`
    )
    .then((response) => {
      return {
        ip: response.data.ip,
        location: `${response.data.location.city},${response.data.location.country} ${response.data.location.postalCode}`,
        timezone: response.data.location.timezone,
        isp: response.data.as.name,
        lat: response.data.location.lat,
        lng: response.data.location.lng,
      };
    });
};

export default getData;
