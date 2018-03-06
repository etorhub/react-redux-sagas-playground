import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import { KeyboardArrowRight, KeyboardArrowLeft } from 'material-ui-icons';

require('./style.css');

const NavigationMusicCard = ({ imageSrc, name, artist, isNext, trackId, handleClick }) => (
  <Card
    onClick={handleClick(trackId)}
    className={`navigation-card ${isNext ? 'right' : 'left'}`}
  >
    <CardMedia
      className="grid-card-media"
      image={imageSrc}
      title="image title"
    />
    <Button size="small" color="primary" aria-label="add">
      {isNext ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    </Button>
    <CardContent className="grid-card-content">
      <div className="track-name">{name}</div>
      <div className="artist">{artist}</div>
    </CardContent>
  </Card>
);


NavigationMusicCard.propTypes = {
  imageSrc: PropTypes.string,
  artist: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isNext: PropTypes.bool,
  trackId: PropTypes.number,
};

NavigationMusicCard.defaultProps = {
  imageSrc: 'https://www.computerhope.com/issues/pictures/itunes-logo.jpg',
  artist: '',
  name: '',
  isNext: false,
  trackId: null,
};

export default NavigationMusicCard;
