import React, { Component } from "react";
import Header from "./components/header/header";

export class App extends Component {
  state = {
    listItems: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      listItems: state.listItems.concat(newItem),
      text: "",
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <h4>Todo List</h4>
        <ul>
          {this.state.listItems.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">What needs to be done?</label>
          <input
            id="todo"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}

export default App;
