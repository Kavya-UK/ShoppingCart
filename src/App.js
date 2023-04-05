import './App.css';
import NavBar from './componets/NavBar';
import Routing from './routing';
import Home from './page/Home';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routing />
    </div>
  );
}

export default App;
