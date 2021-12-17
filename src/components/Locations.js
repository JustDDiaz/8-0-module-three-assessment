import { Component } from "react";
import "../App.css";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locationList: [],
      showLocations: false,
    };
  }

  fetchLocations = () => {
    fetch(
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49/locations"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locationList: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocations();
  };

  toggleShow = () => {
    this.setState({
      showLocations: !this.state.showLocations,
    });
  };

  render() {
    const { locationList, showLocations } = this.state;
    let allLocations = locationList.map((location, i) => {
      return (
        <ul key={i}>
          <li>
            <b>Name: {location.name}</b>
            <br />
            <b>Climate: {location.climate}</b>
            <br />
            <b>Terrain: {location.terrain}</b>
          </li>
        </ul>
      );
    });

    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.toggleShow}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? [allLocations] : null}
      </div>
    );
  }
}

export default Locations;
