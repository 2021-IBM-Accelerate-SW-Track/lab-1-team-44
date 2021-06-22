import Header from "./component/header"
import './App.css';

import Body from './component/body/body'

function App() {
  return (
    <div className="App">
    <Header/>
    <form addtodo>
      <button type = "button" name="new-item-button">new-item-button</button>
      <input type = "submit" value = "Submit" name="input"></input>
    </form>
    <Body/>
    </div>
  );
}


export default App;
