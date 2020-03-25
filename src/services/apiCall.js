export const fetchCovidInfo = async () => {
  const response = await fetch('https://thevirustracker.com/free-api?global=stats')
  if(response.status !== 200) {
    throw(new Error('Error fetching Covid-19 info'))
  } else {
    return await response.json()
  }
};
