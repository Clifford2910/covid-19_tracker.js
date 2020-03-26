import { fetchGlobalCovidInfo } from './apiCall';

describe('CovidInfo api gets called', () => {

  it('calls API and gets 200 code', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.status).toEqual(200);
    })
  });

  it('calls API and returns an array', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results).toEqual(Array);
    })
  });

  it('calls API and returns an array of length 1', ()=> {
    fetchGlobalCovidInfo().then(res => {
      expect(res.results.length).toEqual(1);
    })
  });
});
