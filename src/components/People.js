import { Component } from "react";
import "../App.css";

class People extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: [],
      currentPerson: null,
      userInput: "",
      hasSearched: false,
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
    const { peopleList, userInput } = this.state;
    let currentPersonObject = peopleList.find((person) => {
      return person.name.includes(userInput);
    });
    this.setState({
      currentPerson: currentPersonObject,
      userInput: "",
      hasSearched: true,
    });
  };

  render() {
    let { currentPerson, userInput, hasSearched } = this.state;

    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleFindPerson}>
          <input
            type="text"
            value={userInput}
            placeholder="Find Your Person"
            onChange={this.userInputName}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {currentPerson && (
          <div>
            <h3>{currentPerson.name}</h3>
            <p>{currentPerson.age}</p>
            <p>{currentPerson.gender}</p>
          </div>
        )}
        {!currentPerson && hasSearched && "Not Found"}
      </div>
    );
  }
}

export default People;
