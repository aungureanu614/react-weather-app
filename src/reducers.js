const initialState = {
  location: '',
  data: {},
  dates: [],
  temps: [],
  selected: {
    date: '',
    temp: null
  },
  notFound: ''
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return Object.assign({}, state, {
        location: action.location
      });
    case 'GET_DATA':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'GET_DATES':
      return Object.assign({}, state, {
        dates: action.dates
      });
    case 'GET_TEMPS':
      return Object.assign({}, state, {
        temps: action.temps
      });
    case 'GET_SELECTED_DATE':
      return Object.assign({}, state, {
        selected: {
          date: action.date,
          temp: state.selected.temp
        }
      });
    case 'GET_SELECTED_TEMP':
      return Object.assign({}, state, {
        selected: {
          date: state.selected.date,
          temp: action.temp
        }
      });
    case 'NOT_FOUND':
      return Object.assign({}, state, {
        notFound: action.notFound
      })
    default:
      return state;
  }
}

export default mainReducer;