import logo from './logo.svg';      //그림파일 가지고옴
import './App.css';

const App = () => {
  console.log('App.js');
  return (                        //반드시 리턴구문이 있어야됨!!! return ();
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;               //반드시 export default 해야 외부에서 쓸수 있음
