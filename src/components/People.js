import { Component } from "react";
import "../App.css";

class People extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: [],
      currentPerson: null,
      userInput: null,
    };
  }

  fetchPeople = () => {
    fetch(
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49/people"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peopleList: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  userInputName = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleFindPerson = (event) => {
    event.preventDefault();
    let currentPersonObject = this.state.peopleList.find((person) => {
      return person.name === this.state.userInput;
    });
    this.setState({
      currentPerson: currentPersonObject,
    });
  };

  render() {
    let { currentPerson } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form>
          <input
            type="text"
            placeholder="Find Your Person"
            onChange={this.userInputName}
          ></input>
          <button onSubmit={this.handleFindPerson} value={this.state.userInput}>
            Submit
          </button>
        </form>
        {currentPerson?.name}
        {currentPerson?.age}
        {currentPerson?.gender}
      </div>
    );
  }
}

export default People;
