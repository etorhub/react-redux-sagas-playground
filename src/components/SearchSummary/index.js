import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const SearchSummary = ({ searchText, genresFilters, durationFilter, priceFilter }) => (
  <Paper>
    <p><span>Search Text: </span>{searchText}</p>
    <p><span>Genres: </span>{genresFilters}</p>
    <p><span>Track duration Filters: </span>{durationFilter}</p>
    <p><span>Price: </span>{priceFilter}</p>
  </Paper>
);

SearchSummary.propTypes = {
  searchText: PropTypes.string,
  genresFilters: PropTypes.arrayOf(PropTypes.string),
  durationFilter: PropTypes.string,
  priceFilter: PropTypes.string,
};

SearchSummary.defaultProps = {
  searchText: '',
  genresFilters: [],
  durationFilter: '',
  priceFilter: '',
};
export default SearchSummary;
