import mainReducer from '../reducers';

describe('mainReducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with type "CHANGE_LOCATION"', () => {
    const location = "Vienna, Austria"
    expect(mainReducer(undefined, {
      type: 'CHANGE_LOCATION',
      location
    })).toEqual({
      location,
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }, 
      notFound: ''
    });
  });

  it('should react to an action with the type GET_DATES', () => {
    const dates = ['2016-01-01', '2016-02-02'];
    expect(mainReducer(undefined, {
      type: 'GET_DATES',
      dates
    })).toEqual({
      location: '',
      data: {},
      dates,
      temps: [],
      selected: {
        date: '',
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with the type GET_DATA', () => {
    const data = { cod: "200", message: 0.0141, cnt: 40, list: Array(40), city: {} };
    expect(mainReducer(undefined, {
      type: 'GET_DATA',
      data
    })).toEqual({
      location: '',
      data,
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with the type GET_TEMPS', () => {
    const temps = [28.18, 24.78]
    expect(mainReducer(undefined, {
      type: 'GET_TEMPS',
      temps
    })).toEqual({
      location: '',
      data: {},
      dates: [],
      temps,
      selected: {
        date: '',
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with the type GET_TEMPS', () => {
    const temps = [28.18, 24.78]
    expect(mainReducer(undefined, {
      type: 'GET_TEMPS',
      temps
    })).toEqual({
      location: '',
      data: {},
      dates: [],
      temps,
      selected: {
        date: '',
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with the type GET_SELECTED_DATE', () => {
    const date = '2016-01-01';
    expect(mainReducer(undefined, {
      type: 'GET_SELECTED_DATE',
      date
    })).toEqual({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date,
        temp: null
      },
      notFound: ''
    });
  });

  it('should react to an action with the type GET_SELECTED_TEMP', () => {
    const temp = '31';
    expect(mainReducer(undefined, {
      type: 'GET_SELECTED_TEMP',
      temp
    })).toEqual({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp
      },
      notFound: ''
    });
  });

  it('should react to an action with the type NOT_FOUND', () => {
    const notFound = 'city not found, please try again';
    expect(mainReducer(undefined, {
      type: 'NOT_FOUND',
      notFound
    })).toEqual({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      },
      notFound
    });
  });
});