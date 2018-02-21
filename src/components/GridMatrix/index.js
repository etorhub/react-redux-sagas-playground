import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import GridCard from '../GridCard';

class GridMatrix extends PureComponent {
  render() {
    const { tracks, handleClick } = this.props;
    return (
      <Grid container>
        {tracks.map((track) => (
          <GridCard
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
            handleClick={handleClick}
          />
        ))}
      </Grid>
    );
  }
}

GridMatrix.propTypes = {
  tracks: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
};

GridMatrix.defaultProps = {
  tracks: [],
  handleClick: () => {},
};

export default GridMatrix;
