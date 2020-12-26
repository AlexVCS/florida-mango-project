import { useState } from 'react';
import './App.css';
import { mangoArray } from './components/Mangoes.js';

function App() {
  const [ counter, setCounter ] = useState(0);
  const incrementCounter = () => {
    setCounter((counter + 1) % mangoArray.length);
  }

  const decrementCounter = () => {
    setCounter((mangoArray.length + counter - 1) % mangoArray.length);
  }

  return (
    <div className="app">
      <h1 className="main-header">Mangoes of South Florida</h1>
      <div className="mango-content-container">
        <h1 className="mango-name">{mangoArray[counter].name}</h1>
        <div className="photo-container">
          <img id="mango-photo" src={mangoArray[counter].image} alt="Sweet Tart" />
        </div>
        <div className="description-container">
          <p>{mangoArray[counter].description}</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={decrementCounter} id="previous" className="btn">&#8592;</button>
        <button onClick={incrementCounter} id="next" className="btn">&#8594;</button>
      </div>
    </div>
  );
}

export default App;
