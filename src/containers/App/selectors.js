import get from 'lodash.get';
import { createSelector } from 'reselect';
import { getFilters } from '../Filters/selectors';

export const getData = (state) => state.containers.data;

export const getDataArray = createSelector(
  getData,
  (data) => get(data, 'apiData', {}),
);

export const filteredDataArray = createSelector(
  [getDataArray, getFilters],
  (data, filters) => {
    const genres = get(filters, 'genresFilter', []);
    const duration = get(filters, 'durationFilter', null);
    const price = get(filters, 'priceFilter', null);
    let response = get(data, 'results', []);

    // genre filter
    if (genres.length > 0) {
      response = response.filter((t) => genres.includes(t.primaryGenreName));
    }
    // duration sorting
    if (duration && duration !== '') {
      response = duration === 'shorter' ? response.sort((a, b) => a.trackTimeMillis - b.trackTimeMillis) :
        response.sort((a, b) => a.trackTimeMillis + b.trackTimeMillis);
    }
    // price filter-sorting
    if (price && price !== '') {
      if (price === 'free') {
        response = response.filter((t) => t.trackPrice === -1);
      } else {
        response = duration === 'cheap' ? response.sort((a, b) => a.trackPrice - b.trackPrice) :
          response.sort((a, b) => a.trackPrice + b.trackPrice);
      }
    }

    return response;
  },
);

