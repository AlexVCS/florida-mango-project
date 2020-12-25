import './App.css';

const mangoArray = [
  {
      name: 'Sweet Tart',
      image: 'https://i.postimg.cc/zDcjj1Xj/sweet-tart.jpg',
      description: 'Sweet tart mango was developed by the Zill nursery in Boyton Beach, Florida. It\'s a seedling of Zill Indochinese and tastes like an amazing candy. Smooth and lives up to the name.'
  },
  {
      name: 'Glenn',
      image: 'https://i.postimg.cc/QCwJxcnP/glenn.jpg',
      description: 'Glenn is a delicious mango that was brought to Miami in the 1940\'s. Such a smooth mango, just a delight!'
  },
  {
      name: 'Cushman',
      image: 'https://i.postimg.cc/SNnZFxt3/cushman.jpg',
      description: 'Cushman is a big mango with an unusual round shape. Fiberless inside, the flavor is rich and sweet.'
  },
  {
      name: 'Pineapple Pleasure',
      image: 'https://i.postimg.cc/4xtByFG1/pineapple-pleasure.jpg',
      description: 'This mango has pineapple notes that will make you think twice about what fruit you\'re eating! A great balance of sweet and tart flavors make this mango a winner.'
  },
  {
      name: 'Peach Cobbler',
      image: 'https://i.postimg.cc/cH1mDxnD/peach-cobbler.jpg',
      description: 'Peach cobbler is out of this world! Uber sweet, as if you weren\'t eating a fruit from a tree. Eat this mango alone or after you eat any others, it takes sweetness to a whole new level.'
  }
]

let counter = 0;

function App() {
  return (
    <div className="App">
      <h1 className="main-header">Mangoes of South Florida</h1>
      <img id="mango-photo" src="" alt="" />
      {/* <h2 id="mango-name"></h2> */}
      <p id="mango-description"></p>
      <div className="button-container">
        <button id="next" className="btn">Next</button>
        <button id="previous" className="btn">Previous</button>
      </div>
    </div>
  );
}

export default App;
