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

export { changeLocation, getData, getDates, getTemps, notFound, getSelected };