import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import GridCard from '../GridCard';

class GridMatrix extends PureComponent {
  render() {
    const { tracks } = this.props;
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
          />
        ))}
      </Grid>
    );
  }
}

GridMatrix.propTypes = {
  tracks: PropTypes.array,
};

GridMatrix.defaultProps = {
  tracks: [],
};

export default GridMatrix;
