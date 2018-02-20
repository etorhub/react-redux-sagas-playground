import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Filters from '../Filters';
import { getAPIData, setDataGenres } from './actions';
import { getDataArray, filteredDataArray } from './selectors';

import GridMatrix from '../../components/GridMatrix';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      genres: [],
      durationFilter: '',
      priceFilter: '',
      expandedPanel: false,
    };
    this.expandPanel = this.expandPanel.bind(this);
  }

  expandPanel = () => {
    this.setState({ expandedPanel: !this.state.expandedPanel })
  };

  render() {
    const { filteredData } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My Music
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main-wrapper">
          <div className="grid-matrix">
            <Filters />
            <GridMatrix
              tracks={filteredData}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  apiData: {},
  filteredData: [{}],
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
  filteredData: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  apiData: getDataArray(state),
  filteredData: filteredDataArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, setDataGenres }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
