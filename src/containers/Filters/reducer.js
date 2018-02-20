import {
  SET_SEARCH_TEXT,
  SET_DATA_GENRES,
  SET_DURATION_FILTER,
  SET_PRICE_FILTER,
} from './constants';

export const initialState = {
  searchText: '',
  genresFilter: [],
  durationFilter: '',
  priceFilter: '',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    case SET_DATA_GENRES:
      return { ...state, genresFilter: action.genres };
    case SET_DURATION_FILTER:
      return { ...state, durationFilter: action.durationFilter };
    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.priceFilter };
    default:
      return state;
  }
};

export default filtersReducer;
