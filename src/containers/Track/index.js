import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPreviousTrackToPlay, getTrackToPlay, getNextTrackToPlay } from '../App/selectors';
import { getFilters } from '../Filters/selectors';

import MusicCard from '../../components/MusicCard';
import NavigationMusicCard from '../../components/NavigationMusicCard';
import SearchSummary from '../../components/SearchSummary';
import { setCurrentTrackId } from '../Filters/actions';

require('./styles.css');

export class TracksCarousel extends PureComponent {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick
  }
  handleClick(id) {
    this.props.actions.setCurrentTrackId(id);
  }
  render() {
    const { filters, previous, current, next, actions} = this.props;
    return (
      <div>
        <SearchSummary
          priceFilter={filters.priceFilter}
          durationFilter={filters.durationFilter}
          genresFilters={filters.genresFilters}
          searchText={filters.searchText}
        />
        <NavigationMusicCard
          handleClick={() => this.handleClick}
          imageSrc={next.artworkUrl100}
          artist={next.artistName}
          trackId={next.trackId}
          name={next.trackName}
          isNext
        />
        <NavigationMusicCard
          handleClick={() => this.handleClick}
          imageSrc={previous.artworkUrl100}
          artist={previous.artistName}
          trackId={previous.trackId}
          name={previous.trackName}
        />
        <MusicCard
          name={current.trackName}
          artist={current.artistName}
          imageSrc={current.artworkUrl100}
          audioSrc={current.previewUrl}
          trackId={current.trackId}
        />
      </div>
    );
  }
}

TracksCarousel.propTypes = {
  data: PropTypes.array,
};

TracksCarousel.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({
  filters: getFilters(state),
  previous: getPreviousTrackToPlay(state),
  current: getTrackToPlay(state),
  next: getNextTrackToPlay(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setCurrentTrackId }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksCarousel);
