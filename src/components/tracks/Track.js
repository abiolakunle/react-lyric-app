import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="cart-text">
            <strong>
              <span className="fas fa-play" /> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <span className="fas fa-compact-disc" /> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyric/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <span className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
