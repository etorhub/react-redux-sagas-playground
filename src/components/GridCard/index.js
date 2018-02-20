import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import { convertMillistoTimeString, trickedSizeThumbnail } from './utils';

require('./style.css');

class GridCard extends PureComponent {
  render() {
    const { imageSrc, name, artist, album, price,
      duration, genre, year, currency, trackId } = this.props;
    return (
      <Card className="grid-card">
        <div className="hidden-data">
          <div className="hidden-data_album">
            <span className="hidden-data_album_name">{album}</span>
            <span className="hidden-data_album_year">{` (${year.substring(0, 4)})`}</span>
          </div>
          <div className="hidden-data_genre">{genre}</div>
        </div>
        <Link to={`track/${trackId}`}>
          <CardMedia
            className="grid-card-media"
            image={trickedSizeThumbnail(imageSrc)}
            title="image title"
          />
        </Link>
        <CardContent className="grid-card-content">
          <div className="track-duration">{convertMillistoTimeString(duration)}</div>
          <div className="track-name">{name}</div>
          <div className="artist">{artist}</div>
          <div className="card-price">{`${price} ${currency}`}</div>
        </CardContent>
      </Card>
    );
  }
}
GridCard.propTypes = {
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
};

GridCard.defaultProps = {
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
};

export default GridCard;
