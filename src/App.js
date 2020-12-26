import './App.css';
// import 'Mangoes' from './components/Mangoes.js';

// let counter = 0;

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Mangoes of South Florida</h1>
      <img id="mango-photo" src="" alt="" />
      {/* <h2 id="mango-name"></h2> */}
      <p id="mango-description"></p>

      {/* {mangoArray.map = (mango =>
        <p key={mango.name}>{mango.name}{mango.description}</p>
      )} */}

      <div className="button-container">
        <button id="next" className="btn">Next</button>
        <button id="previous" className="btn">Previous</button>
      </div>
    </div>
  );
}

export default App;
