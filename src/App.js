import Header from "./component/header"
import './App.css';

import Body from './component/body/body'

function App() {
  return (
    <div className="App">
    <Header/>
    <div data-testid="new-item-input">
      <form addtodo>
        <input type = "submit" value = "Submit" name="input"></input>
      </form>
      <div data-testid="new-item-button">
        <button type = "button" name="new-item-button">new-item-button</button>
      </div>

    </div>
    <Body/>
    </div>
  );
}


export default App;
