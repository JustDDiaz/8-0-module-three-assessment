import { Component } from "react";
import "../App.css";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      currentMovie: null,
    };
  }

  fetchMovies = () => {
    fetch(
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49/films"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movieList: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  dropDownChange = (event) => {
    event.target.value !== "empty"
      ? this.setState({
          currentMovie: event.target.value,
        })
      : this.setState({
          currentMovie: null,
        });
  };

  render() {
    let filmOption = this.state.movieList.map((film, i) => {
      return <option key={i}>{film.title}</option>;
    });

    let currentMovieInfo = this.state.movieList.find((film) => {
      return film.title === this.state.currentMovie;
    });

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.dropDownChange}>
          <option></option>
          <option>empty</option>
          {filmOption}
        </select>
        <b className="currentMovie">
          {this.state.currentMovie
            ? `Title: ${currentMovieInfo.title}  Release Date: ${currentMovieInfo.release_date} 
          Description: ${currentMovieInfo.description}`
            : null}
        </b>
      </div>
    );
  }
}

export default Movies;
