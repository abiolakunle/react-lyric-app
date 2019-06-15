import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findTrack = (dispatch, event) => {
    event.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        this.setState({
          trackTitle: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChange = event => {
    //this.setState({ trackTitle: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <span className="fas fa-music"> Search for a song</span>
              </h1>
              <p className="lead text-center">Get the lyric for any song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="song title...."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    //onChange={this.onChange.bind(this)}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg mb-5"
                >
                  Get Track Lyric
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
