import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

import { convertMillistoTimeString, trickedSizeThumbnail } from './utils';
require('./style.css');
// require('./functions.js');
class MusicCard extends Component {
  render() {
    const { imageSrc, name, artist, album, price,
      duration, genre, year, currency, trackId, audioSrc } = this.props;
    const cardStyles = {
      backgroundImage: `url(${trickedSizeThumbnail(imageSrc)})`,
    };

    return (
      <div>
        <div className="container">
          <div className="player" style={cardStyles}>
            <div className="mask"></div>
            <ul className="player-info info-one">
              <li>{name}</li>
              <li>{artist}</li>
              <li>{convertMillistoTimeString(duration)}</li>
            </ul>
            <ul className="player-info info-two">
              <li>{name}</li>
              <li>{artist}</li>
              <li>
                <span id="duration"></span><i> / </i>
                {convertMillistoTimeString(duration)}
              </li>
            </ul>
            <div id="play-button" className="unchecked">
              <i className="icon icon-play"></i>
            </div>
            <div className="control-row" />
          </div>
        </div>
        <audio id="audio-player" preload="auto" loop>
            <source src={audioSrc} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}
MusicCard.propTypes = {
  imageSrc: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  duration: PropTypes.number,
  genre: PropTypes.string,
  year: PropTypes.date,
  currency: PropTypes.string,
  trackId: PropTypes.number,
  audioSrc: PropTypes.string,
};

MusicCard.defaultProps = {
  imageSrc: 'https://www.computerhope.com/issues/pictures/itunes-logo.jpg',
  artist: '',
  album: '',
  price: '',
  name: '',
  duration: '',
  genre: '',
  year: '',
  currency: '',
  trackId: null,
  audioSrc: '',
};

export default MusicCard;
