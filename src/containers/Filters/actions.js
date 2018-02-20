import {
  SET_SEARCH_TEXT,
  SET_DATA_GENRES,
  SET_DURATION_FILTER,
  SET_PRICE_FILTER,
} from './constants';

export const setSearchFilter = (searchText) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});

export const setDataGenres = (genres) => ({
  type: SET_DATA_GENRES,
  genres,
});

export const setDurationFilter = (durationFilter) => ({
  type: SET_DURATION_FILTER,
  durationFilter,
});

export const setPriceFilter = (priceFilter) => ({
  type: SET_PRICE_FILTER,
  priceFilter,
});
