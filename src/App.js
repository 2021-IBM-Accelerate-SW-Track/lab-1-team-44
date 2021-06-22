import Header from "./component/header"
import './App.css';

import Body from './component/body/body'

function App() {
  return (
    <div className="App">
    <Header/>
    <form addTodo>
      <button type = "button">new-item-button</button>
      <input type = "submit" value = "Submit"></input>
    </form>
    <Body/>
    </div>
  );
}


export default App;
