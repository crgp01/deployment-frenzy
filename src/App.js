import logo from './rocket.gif';
import logo2 from './rocket2.gif';

import './App.css';

function App() {
  const image = process.env.REACT_APP_ENV === 'dev'? logo2 : logo;
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="logo" width="500px" height="400px"/>
        <p>
          Deployment Frenzy!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
