import { changeLocation, getSelectedDate, getSelectedTemp } from '../actions';

describe('actions', () => {
  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });

    it('should pass on the location we pass in', () => {
      var location = 'Vienna, Austria';
      expect(changeLocation(location).location).toEqual(location);
    });
  });

  describe('getSelectedDate', () => {
    it('should have a type of GET_SELECTED_DATE', () => {
      expect(getSelectedDate().type).toEqual('GET_SELECTED_DATE');
     });

    it('should pass on the date we pass in', () => { 
      var date = '2016-01-01';
      expect(getSelectedDate(date).date).toEqual(date);
    });
  });

  describe('getSelectedTemp', () => {
    it('should have a type of GET_SELECTED_TEMP', () => {
      expect(getSelectedTemp().type).toEqual('GET_SELECTED_TEMP');
     });

    it('should pass on the temp we pass in', () => {
      var temp = '31';
      expect(getSelectedTemp(temp).temp).toEqual(temp);
     });
  });


})