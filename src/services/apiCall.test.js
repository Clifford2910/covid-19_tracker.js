import { fetchGlobalCovidInfo } from './apiCall';
import { fetchCountryCovidInfo } from './apiCall';


describe('GlobalCovidInfo api gets called', () => {
  it('calls global API and gets 200 code', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.status).toEqual(200);
    })
  });

  it('calls global API and returns an array', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results).toEqual(Array);
    })
  });

  it('calls global API and returns the length of the array', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results.length).toEqual(1);
    })
  });
});

describe('CountryCovidInfo api gets called', () => {
  it('calls country API and gets 200 code', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.status).toEqual(200);
    })
  });

  it('calls country API and returns an array', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results).toEqual(Array);
    })
  });

  it('calls country API and returns the length of the array', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results.length).toEqual(2);
    })
  });
});
