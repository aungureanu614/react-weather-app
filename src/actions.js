const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location
  }
}

const getData = (data) => {
  return {
    type: 'GET_DATA',
    data
  }
}

const getDates = (dates) => {
  return {
    type: 'GET_DATES',
    dates
  }
}

const getTemps = (temps) => {
  return {
    type: 'GET_TEMPS',
    temps
  }
}

const getSelected = (selected) => {
  return {
    type: 'GET_SELECTED',
    selected
  }
}

const notFound = (notFound) => {
  return {
    type: 'NOT_FOUND',
    notFound
  }
}

const fetchData = (url) => {
  return async function thunk(dispatch) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === '404') {
        console.log('here??')
        dispatch(notFound('City not found, please try again'));
        dispatch(getData({}));
      } else {
        const dates = [];
        const temps = [];
        data.list.forEach((item) => {
          dates.push(item.dt_txt);
          temps.push(item.main.temp);
        });
        dispatch(getData(data));
        dispatch(getDates(dates));
        dispatch(getTemps(temps));
        const selected = {
          date: '',
          temp: null
        }
        dispatch(getSelected(selected));
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

export { changeLocation, getData, getDates, getTemps, notFound, getSelected, fetchData };