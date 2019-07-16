import { changeLocation, getSelectedDate, getSelectedTemp, notFound, getData, getDates, getTemps } from '../actions';

describe('actions', () => {
  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });

    it('should pass on the location we pass in', () => {
      const location = 'Vienna, Austria';
      expect(changeLocation(location).location).toEqual(location);
    });
  });
  
  describe('getData', () => {
    it('should have a type of "GET_DATA"', () => {
      expect(getData().type).toEqual('GET_DATA');
    });

    it('should pass on the data we pass in', () => {
      const data = { cod: "200", message: 0.0141, cnt: 40, list: Array(40), city: {} }
      expect(getData(data).data).toEqual(data);
    });
  });
  
  describe('getDates', () => {
    it('should have a type of "GET_DATES"', () => {
      expect(getDates().type).toEqual('GET_DATES');
    });

    it('should pass on the dates we pass in', () => {
      const dates = ["2019-07-17 00:00:00", "2019-07-17 03:00:00"]
      expect(getDates(dates).dates).toEqual(dates);
    });
  });

  describe('getTemps', () => {
    it('should have a type of "GET_TEMPS"', () => {
      expect(getTemps().type).toEqual('GET_TEMPS');
    });

    it('should pass on the temps we pass in', () => {
      const temps = [28.18, 24.78]
      expect(getTemps(temps).temps).toEqual(temps);
    });
  });

  describe('getSelectedDate', () => {
    it('should have a type of GET_SELECTED_DATE', () => {
      expect(getSelectedDate().type).toEqual('GET_SELECTED_DATE');
     });

    it('should pass on the date we pass in', () => { 
      const date = '2016-01-01';
      expect(getSelectedDate(date).date).toEqual(date);
    });
  });

  describe('getSelectedTemp', () => {
    it('should have a type of GET_SELECTED_TEMP', () => {
      expect(getSelectedTemp().type).toEqual('GET_SELECTED_TEMP');
     });

    it('should pass on the temp we pass in', () => {
      const temp = '31';
      expect(getSelectedTemp(temp).temp).toEqual(temp);
     });
  });

  describe('notFound', () => {
    it('should have a type "NOT_FOUND', () => {
      expect(notFound().type).toEqual('NOT_FOUND');
    });

    it('should pass on not found text', () => {
      const text = 'city not found';
      expect(notFound(text).notFound).toEqual(text);
    });
  });
});