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

const getSelectedDate = (date) => {
  return {
    type: 'GET_SELECTED_DATE',
    date
  }
}

const getSelectedTemp = (temp) => {
  return {
    type: 'GET_SELECTED_TEMP',
    temp
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
        dispatch(notFound('City not found, please try again'));
        dispatch(getData({}));
      } else {
        const dates = [];
        const temps = [];
        data.list.forEach((item) => {
          dates.push(item.dt_txt);
          temps.push(item.main.temp);
        });
        console.log(dates, temps)
        dispatch(getData(data));
        dispatch(getDates(dates));
        dispatch(getTemps(temps));
        dispatch(getSelectedDate(''));
        dispatch(getSelectedTemp(null));
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

export { changeLocation, getData, getDates, getTemps, notFound, getSelectedDate, getSelectedTemp, fetchData };