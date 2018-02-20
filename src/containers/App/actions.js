import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  SET_DATA_GENRES,
} from './constants';

export const getAPIData = (searchText) => ({
  type: GET_API_DATA,
  data: searchText,
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data,
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error,
});

export const setDataGenres = (genres) => ({
  type: SET_DATA_GENRES,
  genres,
});
