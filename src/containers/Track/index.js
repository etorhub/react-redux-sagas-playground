import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import Coverflow from 'react-coverflow';
import { selectApiData } from '../App/selectors';
import { trickedSizeThumbnail } from '../../components/MusicCard/utils';
import { mockList } from './mockData';
import MusicCard from "../../components/MusicCard/index";


require('./styles.css');

export class TracksCarousel extends Component {
  render() {
    const { data } = this.props;
    return (
      <Coverflow
        styles={{ height: 600 }}
        displayQuantityOfSide={1}
        navigation
        enableHeading
        enableScroll
        clickable
        active={0}
      >
        {data.map((track) => (
          <div>
            <MusicCard
              imageSrc={trickedSizeThumbnail(track.artworkUrl100)}
              audioSrc={track.previewUrl}
              artist={track.artistName}
              album={track.collectionName}
              price={track.trackPrice}
              name={track.trackName}
              duration={track.trackTimeMillis}
              genre={track.primaryGenreName}
              year={track.releaseDate}
              currency={track.currency}
              trackId={track.trackId}
            />
          </div>
        ))}
      </Coverflow>
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
  // data: get(selectApiData(state), 'results', []),
  state,
  data: mockList,
});

export default connect(mapStateToProps)(TracksCarousel);
