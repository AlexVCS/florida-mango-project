import { useState } from "react";
import "./App.css";
import { mangoArray } from "./components/Mangoes.js";
// import { DarkModeToggle } from './components/toggle';


function App() {
  const [counter, setCounter] = useState(0);
  const [mango] = useState(true)

  const incrementCounter = () => {
    setCounter((counter + 1) % mangoArray.length);
  };

  const decrementCounter = () => {
    setCounter((mangoArray.length + counter - 1) % mangoArray.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      console.log('hi this is cool')
      decrementCounter()
    }
    if (event.key === "ArrowRight") {
      console.log("hi this is cool");
      incrementCounter();
    }
  }

  return (
    <div
      className="app"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onBlur={(e) => e.target.focus()}
      ref={(div) => {
        mango && div && div.focus();
      }}
    >
      {/* <DarkModeToggle /> */}
      <h1 className="main-header">Mangoes of South Florida 🥭</h1>
      <h4 className="instructions">
        Navigate with arrow buttons or left/right arrow keys
      </h4>
      <div className="mango-content-container">
        <h1 className="mango-name">{mangoArray[counter].name}</h1>
        <div className="photo-container">
          <img
            id="mango-photo"
            src={mangoArray[counter].image}
            alt="Florida mango"
          />
        </div>
        <div className="description-container">
          <p>{mangoArray[counter].description}</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={decrementCounter} id="previous" className="btn">
          &#8592;
        </button>
        <button onClick={incrementCounter} id="next" className="btn">
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;
