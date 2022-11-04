import Home from "./home";
import './global/style.css'
import Map from "./game-map";
import Game_Video from "./game-video";
import Champion from "./champion";


function App() {

  return (
    <div className="App">
      <Home />
      <Game_Video />
      <Champion />
      <Map />
    </div>
  );
}

export default App;
