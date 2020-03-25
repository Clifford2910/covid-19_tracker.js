import { fetchCovidInfo } from './apiCall';

describe('api gets called', () => {

  it('calls API and gets 200 code', ()=> {
    fetchCovidInfo().then(res => {
      expect(res.status).toEqual(200);
    })
  });

  it('calls API and returns an array', ()=> {
    fetchCovidInfo().then(res => {
      expect(res.results).toEqual(Array);
    })
  });

  it('calls API and returns an array of length 1', ()=> {
    fetchCovidInfo().then(res => {
      expect(res.results.length).toEqual(1);
    })
  });
});
