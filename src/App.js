import Header from "./component/header"
import './App.css';
import React, { Component } from "react";
import Body from './component/body/body'

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
    <div  className="App">
        <div>
          <Header/>
          <h4 style={{color: "#75DAF5"}}>Todo List</h4>
          <ul>
            {this.state.listItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
          <form style={{color: "#AB6CEA"}}onSubmit={this.handleSubmit}>
            <label htmlFor="todo">What needs to be done?</label>
            <input
              id="todo"
              name="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>Add Todo</button>
          </form>
      </div>

        <div data-testid="new-item-input">
          <form addtodo>
            <input type = "submit" value = "Submit" name="input"></input>
          </form>

        </div>

        <div data-testid="new-item-button">
          <button type = "button" name="button">new-item-button</button>
        </div>

        <Body/>
      </div>
    );
  }
}

export default App;