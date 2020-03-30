export const fetchGlobalCovidInfo = async () => {
  const response = await fetch('https://thevirustracker.com/free-api?global=stats')
  if(response.status !== 200) {
    throw(new Error('Error fetching globalCovid-19 info'))
  } else {
    return await response.json()
  }
};

export const fetchCountryCovidInfo = async () => {
  const response = await fetch('https://thevirustracker.com/free-api?countryTotals=ALL')
  if(response.status !== 200) {
    throw(new Error('Error fetching countryCovid-19 info'))
  } else {
    return await response.json()
  }
};
