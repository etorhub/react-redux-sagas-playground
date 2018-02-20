import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import Coverflow from 'react-coverflow';
import { selectApiData } from '../App/selectors';
import MusicCard from '../../components/MusicCard';
import { mockList } from './mockData';

require('./styles.css');

export class TracksCarousel extends Component {
  render() {
    const { data } = this.props;
    const track = data;
    return (
      <div>
        <MusicCard
          artist={track.artistName}
          imageSrc={track.artworkUrl100}
          album={track.collectionName}
          price={track.trackPrice}
          name={track.trackName}
          duration={track.trackTimeMillis}
          genre={track.primaryGenreName}
          year={track.releaseDate}
          currency={track.currency}
          trackId={track.trackId}
          audioSrc={track.previewUrl}
        />
      </div>
    );
  }
}

TracksCarousel.propTypes = {
  match: PropTypes.object,
  data: PropTypes.array,
};

TracksCarousel.defaultProps = {
  match: {
    params: {
      id: '-1',
    },
  },
  data: [],
};

const mapStateToProps = (state) => ({
  data: mockList[0],
  state,
});

export default connect(mapStateToProps)(TracksCarousel);
