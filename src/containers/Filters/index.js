import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import FilterList from 'material-ui-icons/FilterList';
import get from 'lodash.get';
import { setSearchFilter, setDataGenres, setDurationFilter, setPriceFilter } from './actions';
import { getAPIData } from '../App/actions';
import { getFilters } from './selectors';
import { getDataArray } from '../App/selectors';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      expandedPanel: false,
    };
    this.expandPanel = this.expandPanel.bind(this);
  }
  handleTextInput = prop => event => {
    event.persist();
    this.props.actions.setSearchFilter(event.target.value);
    this.props.actions.getAPIData(event.target.value);
  };

  handleGenreFilterChange = name => event => {
    let { genresFilter } = this.props.filters;
    if (name === 'reset') {
      genresFilter = [];
    } else {
      if(genresFilter.includes(name)) {
        genresFilter = genresFilter.filter(e => e !== name)
      } else {
        genresFilter.push(name);
      }
    }
    this.props.actions.setDataGenres(genresFilter);
  };

  expandPanel = () => {
    this.setState({ expandedPanel: !this.state.expandedPanel })
  };

  handleDurationFilterChange = event => {
    this.props.actions.setDurationFilter(event.target.value);
  };
  handlePriceFilterChange = event => {
    this.props.actions.setPriceFilter(event.target.value);
  };

  render() {
    const { apiData, filters } = this.props;
    const tracks = get(apiData, 'results', [])
    const categories = tracks.map(item => item.primaryGenreName)
      .filter((value, index, self) => self.indexOf(value) === index);
    return (
      <div className="search-bar">
        <ExpansionPanel expanded={this.state.expandedPanel}>
          <ExpansionPanelSummary expandIcon={<FilterList onClick={this.expandPanel} />}>
            <TextField
              id="full-width"
              label="Search"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleTextInput('search')}
              placeholder="Search a song, artist, album, genre..."
              fullWidth
              margin="normal"
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="sort-filters">
              <FormGroup>
                <FormControl fullWidth>
                  <InputLabel htmlFor="duration-simple">Duration</InputLabel>
                  <Select
                    value={filters.durationFilter}
                    onChange={this.handleDurationFilterChange}
                    inputProps={{
                      name: 'duration',
                      id: 'duration-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'shorter'}>Shorter</MenuItem>
                    <MenuItem value={'longer'}>Longer</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="price-simple">Price</InputLabel>
                  <Select
                    value={filters.priceFilter}
                    onChange={this.handlePriceFilterChange }
                    inputProps={{
                      name: 'price',
                      id: 'price-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'cheap'}>Cheaper</MenuItem>
                    <MenuItem value={'expensive'}>More expensive</MenuItem>
                    <MenuItem value={'free'}>Free</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </div>
            <div className="genre-filters">
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox
                    checked={filters.genresFilter.length === 0}
                    onChange={this.handleGenreFilterChange('reset')}
                  />}
                  label="All Genres"
                />
                {categories.map((r)=>
                  <FormControlLabel
                    control={<Checkbox
                      checked={filters.genresFilter.find(g => g === r)}
                      onChange={this.handleGenreFilterChange(r)}
                      value={r}
                    />}
                    label={r}
                  />
                )}
              </FormGroup>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>

    )
    ;
  }
}

Filters.defaultProps = {
  apiData: {},
  filteredData: [{}],
};

Filters.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
  filteredData: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  apiData: getDataArray(state),
  filters: getFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, setSearchFilter, setDataGenres, setDurationFilter, setPriceFilter }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
